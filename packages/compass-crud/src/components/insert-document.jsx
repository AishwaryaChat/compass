const React = require('react');
const PropTypes = require('prop-types');
const Element = require('hadron-document').Element;
const EditableElement = require('./editable-element');

/**
 * The class for the document itself.
 */
const DOCUMENT = 'document';

/**
 * The elements wrapper class.
 */
const DOCUMENT_ELEMENTS = 'document-elements';

/**
 * Component for a single document in a list of documents.
 */
class InsertDocument extends React.Component {

  /**
   * The component constructor.
   *
   * @param {Object} props - The properties.
   */
  constructor(props) {
    super(props);
    this.unsubscribeAdded = this.handleModify.bind(this);
    this.unsubscribeRemoved = this.handleModify.bind(this);

    this.props.doc.on(Element.Events.Added, this.unsubscribeAdded);
    this.props.doc.on(Element.Events.Removed, this.unsubscribeRemoved);
  }

  /**
   * Subscribe to the events.
   */
  componentDidMount() {
    this.props.doc.on(Element.Events.Added, this.unsubscribeAdded);
    this.props.doc.on(Element.Events.Removed, this.unsubscribeRemoved);
  }

  /**
   * Unsubscribe from the events.
   */
  componentWillUnmount() {
    this.props.doc.removeListener(Element.Events.Added, this.unsubscribeAdded);
    this.props.doc.removeListener(Element.Events.Removed, this.unsubscribeRemoved);
  }

  /**
   * Handle modifications to the document.
   */
  handleModify() {
    this.forceUpdate();
  }

  /**
   * Get the editable elements.
   *
   * @returns {Array} The editable elements.
   */
  renderElements() {
    const components = [];
    for (const element of this.props.doc.elements) {
      components.push(
        <EditableElement
          key={element.uuid}
          element={element}
          closeAllMenus={this.props.closeAllMenus}
          indent={0}
          editing />);
    }
    return components;
  }

  /**
   * Render a single document list item.
   *
   * @returns {React.Component} The component.
   */
  render() {
    return (
      <div className={DOCUMENT} data-test-id="insert-document-modal">
        <ol className={DOCUMENT_ELEMENTS}>
          {this.renderElements(this.props.doc)}
        </ol>
      </div>
    );
  }
}

InsertDocument.displayName = 'InsertDocument';

InsertDocument.propTypes = {
  doc: PropTypes.object.isRequired,
  closeAllMenus: PropTypes.func.isRequired
};

module.exports = InsertDocument;
