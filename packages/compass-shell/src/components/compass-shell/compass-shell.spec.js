import sinon from 'sinon';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Shell } from '@mongosh/browser-repl';
import { ResizeHandle } from '@mongodb-js/compass-components';

import { CompassShell } from './compass-shell';
import ShellHeader from '../shell-header';
import InfoModal from '../info-modal';

function updateAndWaitAsync(wrapper) {
  wrapper.update();
  return new Promise(setImmediate);
}

const fakeRuntime = {
  evaluate: sinon.fake.returns({ printable: 'some result' }),
  setEvaluationListener: () => {}
};

describe('CompassShell', () => {
  context('when rendered', () => {
    let wrapper;
    let emitShellOpenedSpy;

    beforeEach(() => {
      emitShellOpenedSpy = sinon.spy();

      wrapper = mount(<CompassShell
        runtime={fakeRuntime}
        emitShellPluginOpened={emitShellOpenedSpy}
      />);
    });

    afterEach(() => {
      wrapper = null;
    });

    it('has the shell display none', () => {
      const shellDomNode = wrapper.find('[data-testid="shell-content"]').getDOMNode();
      const shellDisplayStyle = getComputedStyle(shellDomNode).getPropertyValue('display');
      expect(shellDisplayStyle).to.equal('none');
    });

    context('when is it expanded', () => {
      it('calls the function prop emitShellPluginOpened', () => {
        expect(emitShellOpenedSpy.calledOnce).to.equal(false);

        wrapper.setState({ height: 300 });
        wrapper.update();

        expect(emitShellOpenedSpy.calledOnce).to.equal(true);
      });
    });
  });

  context('when rendered expanded', () => {
    context('when runtime property is not present', () => {
      it('does not render a shell if runtime is null', () => {
        const wrapper = mount(
          <CompassShell
            runtime={null}
          />
        );
        wrapper.setState({ height: 300 });
        wrapper.update();
        expect(wrapper.find(Shell).exists()).to.equal(false);
      });
    });

    context('when runtime property is present', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = mount(<CompassShell
          runtime={fakeRuntime}
          emitShellPluginOpened={() => {}}
        />);

        wrapper.find('[data-testid="shell-expand-button"]').simulate('click');
        wrapper.update();
      });
      afterEach(() => {
        wrapper = null;
      });

      it('renders the Shell', () => {
        expect(wrapper.find(Shell).prop('runtime')).to.equal(fakeRuntime);

        const shellDomNode = wrapper.find('[data-testid="shell-content"]').getDOMNode();
        const shellDisplayStyle = getComputedStyle(shellDomNode).getPropertyValue('display');
        expect(shellDisplayStyle).to.equal('flex');
      });

      it('renders the ShellHeader component', () => {
        expect(wrapper.find(ShellHeader).exists()).to.equal(true);
      });

      it('renders a Resizable component', () => {
        expect(wrapper.find(ResizeHandle)).to.be.present();
      });

      it('renders the info modal component', () => {
        expect(wrapper.find(InfoModal)).to.be.present();
      });

      it('renders the Shell with an output change handler', () => {
        expect(!!wrapper.find(Shell).prop('onOutputChanged')).to.equal(true);
      });
    });

    context('with a runtime and saved shell output', () => {
      it('renders the inital output', () => {
        const wrapper = mount(<CompassShell
          runtime={fakeRuntime}
          emitShellPluginOpened={() => {}}
          shellOutput={[{
            type: 'output',
            value: 'pineapple'
          }]}
        />);

        wrapper.find('[data-testid="shell-expand-button"]').simulate('click');
        wrapper.update();

        expect(wrapper.find(Shell).prop('initialOutput')).to.deep.equal([{
          type: 'output',
          value: 'pineapple'
        }]);
      });
    });

    context('when historyStorage is not present', () => {
      it('passes an empty history to the Shell', () => {
        const wrapper = shallow(<CompassShell runtime={fakeRuntime} isExpanded />);

        expect(wrapper.find(Shell).prop('initialHistory')).to.deep.equal([]);
      });
    });

    context('when it is clicked to collapse', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = mount(<CompassShell
          runtime={fakeRuntime}
          emitShellPluginOpened={() => {}}
        />);

        wrapper.find('[data-testid="shell-expand-button"]').simulate('click');
        wrapper.update();

        wrapper.find('[data-testid="shell-expand-button"]').simulate('click');
        wrapper.update();
      });
      afterEach(() => {
        wrapper = null;
      });

      it('sets the collapsed height to 32', () => {
        expect(wrapper.find('[data-testid="shell-section"]').prop('style').height).to.equal(32);
      });

      context('when it is expanded again', () => {
        it('resumes its previous height', () => {
          wrapper.find('[data-testid="shell-expand-button"]').simulate('click');
          wrapper.update();

          wrapper.instance().updateHeight(399);
          wrapper.update();

          wrapper.find('[data-testid="shell-expand-button"]').simulate('click');
          wrapper.update();

          wrapper.find('[data-testid="shell-expand-button"]').simulate('click');
          wrapper.update();

          expect(wrapper.find('[data-testid="shell-section"]').prop('style').height).to.equal(399);
        });
      });
    });
  });

  context('when historyStorage is present', () => {
    let fakeStorage;

    beforeEach(() => {
      fakeStorage = {
        load: sinon.spy(() => Promise.resolve([])),
        save: sinon.spy(() => Promise.resolve()),
      };
    });

    it('passes the loaded history as initialHistory to Shell', async() => {
      fakeStorage.load = sinon.spy(() => Promise.resolve(['line1']));

      const wrapper = shallow(<CompassShell
        runtime={{}}
        historyStorage={fakeStorage}
        isExpanded
      />);

      await updateAndWaitAsync(wrapper);

      expect(wrapper.find(Shell).prop('initialHistory')).to.deep.equal(['line1']);
    });

    it('saves the history when history changes', async() => {
      const wrapper = shallow(<CompassShell
        runtime={{}}
        historyStorage={fakeStorage}
        isExpanded
      />);

      await updateAndWaitAsync(wrapper);

      const onHistoryChanged = wrapper.find(Shell).prop('onHistoryChanged');
      onHistoryChanged(['line1']);

      expect(
        fakeStorage.save.calledWith(['line1'])
      ).to.equal(true);
    });
  });

  it('sets shellOutput on onShellOutputChanged', () => {
    const shell = new CompassShell({ isExpanded: true });

    shell.onShellOutputChanged([{
      type: 'output',
      value: 'some output'
    }]);

    expect(shell.shellOutput).to.deep.equal([{
      type: 'output',
      value: 'some output'
    }]);
  });

  context('resize actions', () => {
    let onOpenShellSpy;
    let wrapper;

    beforeEach(() => {
      onOpenShellSpy = sinon.spy();
      wrapper = mount(<CompassShell
        runtime={fakeRuntime}
        emitShellPluginOpened={onOpenShellSpy}
      />);
    });
    afterEach(() => {
      onOpenShellSpy = null;
      wrapper = null;
    });

    context('when expanded', () => {
      beforeEach(() => {
        wrapper.setState({ height: 199 });
        wrapper.update();
      });

      context('when the height is updated', () => {
        beforeEach(() => {
          wrapper.setState({ height: 131 });
          wrapper.update();
        });

        it('does not collapse the component', () => {
          const shellDomNode = wrapper.find('[data-testid="shell-content"]').getDOMNode();
          const shellDisplayStyle = getComputedStyle(shellDomNode).getPropertyValue('display');
          expect(shellDisplayStyle).to.equal('flex');
        });

        context('when it hits the lower bound', () => {
          beforeEach(() => {
            wrapper.setState({ height: 1 });
            wrapper.update();
          });

          it('collapses the shell', () => {
            expect(wrapper.find('[data-testid="shell-section"]').prop('style').height).to.equal(32);
            const shellDomNode = wrapper.find('[data-testid="shell-content"]').getDOMNode();
            const shellDisplayStyle = getComputedStyle(shellDomNode).getPropertyValue('display');
            expect(shellDisplayStyle).to.equal('none');
          });
        });
      });
    });

    context('when collapsed', () => {
      context('when the height is updated', () => {
        beforeEach(() => {
          wrapper.setState({ height: 55 });
          wrapper.update();
        });

        it('updates the height', () => {
          expect(wrapper.find('[type="range"]').at(0).prop('value')).to.equal(55);
          expect(wrapper.find('[data-testid="shell-section"]').prop('style').height).to.equal(32);
        });

        it('does not expand the component', () => {
          const shellDomNode = wrapper.find('[data-testid="shell-content"]').getDOMNode();
          const shellDisplayStyle = getComputedStyle(shellDomNode).getPropertyValue('display');
          expect(shellDisplayStyle).to.equal('none');
        });

        it('does not calls the function prop emitShellPluginOpened', () => {
          expect(onOpenShellSpy.called).to.equal(false);
        });

        context('when it hits the resize threshold', () => {
          beforeEach(() => {
            wrapper.setState({ height: 151 });
            wrapper.update();
          });

          it('expands the shell', () => {
            expect(wrapper.find('[data-testid="shell-section"]').prop('style').height).to.equal(151);
            const shellDomNode = wrapper.find('[data-testid="shell-content"]').getDOMNode();
            const shellDisplayStyle = getComputedStyle(shellDomNode).getPropertyValue('display');
            expect(shellDisplayStyle).to.equal('flex');
          });

          it('calls the function prop emitShellPluginOpened', () => {
            expect(onOpenShellSpy.calledOnce).to.equal(true);
          });
        });
      });
    });
  });
});

