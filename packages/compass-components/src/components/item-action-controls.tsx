import React, { useRef, forwardRef, useCallback, useState } from 'react';
import { Icon, IconButton } from '../index';

import { spacing } from '@leafygreen-ui/tokens';
import { css, cx } from '@leafygreen-ui/emotion';

import { Menu, MenuItem } from '@leafygreen-ui/menu';

export type ItemAction<Action> = {
  action: Action;
  label: string;
  icon: string;
};

export type MenuAction<Action> = {
  action: Action;
  label: string;
  icon?: string;
};

const ItemActionButtonSize = {
  Small: 'small',
  Default: 'default',
} as const;

type ItemActionButtonSize =
  typeof ItemActionButtonSize[keyof typeof ItemActionButtonSize];

const actionControlsStyle = css({
  flex: 'none',
  marginLeft: 'auto',
  alignItems: 'center',
  display: 'flex',
});

const actionGroupButtonStyle = css({
  '&:not(:first-child)': {
    marginLeft: spacing[1],
  },
});

const iconContainerStyle = css({
  display: 'block',
  flex: 'none',
  fontSize: 0,
  lineHeight: 0,
});

// Using important here because leafygreen / emotion applies styles in the order
// that doesn't allow our styles override theirs
const iconButtonSmallStyle = css({
  flex: 'none',
  width: `${spacing[4]}px !important`,
  height: `${spacing[4]}px !important`,
});

function actionTestId<Action extends string>(
  dataTestId: string | undefined,
  action: Action
) {
  return dataTestId ? `${dataTestId}-${action}-action` : undefined;
}

const ItemActionButton = forwardRef<
  HTMLButtonElement,
  {
    glyph: string;
    label: string;
    title?: string;
    size: ItemActionButtonSize;
    onClick(evt: React.MouseEvent<HTMLButtonElement>): void;
  } & Omit<React.HTMLProps<HTMLButtonElement>, 'size'>
>(function IconButtonSmall(
  { glyph, size, label, onClick, children, title, className, ...rest },
  ref
) {
  return (
    <IconButton
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error leafygreen confuses TS a lot here
      ref={ref}
      className={cx(
        size === ItemActionButtonSize.Small ? iconButtonSmallStyle : '',
        className
      )}
      aria-label={label}
      title={title}
      onClick={onClick}
      {...rest}
    >
      <span role="presentation" className={iconContainerStyle}>
        <Icon size={size} glyph={glyph}></Icon>
      </span>
      {/* Only here to make leafygreen menus work */}
      {children}
    </IconButton>
  );
});

export function ItemActionMenu<Action extends string>({
  isVisible = true,
  actions,
  onAction,
  className,
  usePortal,
  iconClassName,
  iconSize = ItemActionButtonSize.Default,
  'data-testid': dataTestId,
}: {
  actions: MenuAction<Action>[];
  onAction(actionName: Action): void;
  className?: string;
  usePortal?: boolean;
  iconClassName?: string;
  iconSize?: ItemActionButtonSize;
  isVisible?: boolean;
  'data-testid'?: string;
}) {
  const menuTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClick = useCallback(
    (evt) => {
      evt.stopPropagation();
      if (evt.currentTarget.dataset.menuitem) {
        setIsMenuOpen(false);
        // Workaround for https://jira.mongodb.org/browse/PD-1674
        menuTriggerRef.current?.focus();
      }
      onAction(evt.currentTarget.dataset.action);
    },
    [onAction]
  );

  const shouldRender = isMenuOpen || (isVisible && actions.length > 0);

  if (!shouldRender) {
    return null;
  }

  return (
    <div className={cx(actionControlsStyle, className)}>
      <Menu
        open={isMenuOpen}
        setOpen={setIsMenuOpen}
        refEl={menuTriggerRef}
        usePortal={usePortal}
        data-testid={dataTestId}
        trigger={({
          onClick,
          children,
        }: {
          onClick: React.MouseEventHandler<HTMLButtonElement>;
          children: React.ReactNode;
        }) => {
          return (
            <ItemActionButton
              ref={menuTriggerRef}
              size={iconSize}
              glyph="Ellipsis"
              label="Show actions"
              title="Show actions"
              data-testid={
                dataTestId ? `${dataTestId}-show-actions` : undefined
              }
              onClick={(evt) => {
                evt.stopPropagation();
                onClick && onClick(evt);
              }}
              className={cx(actionGroupButtonStyle, iconClassName)}
            >
              {children}
            </ItemActionButton>
          );
        }}
      >
        {actions.map(({ action, label, icon }) => {
          return (
            <MenuItem
              key={action}
              data-testid={actionTestId<Action>(dataTestId, action)}
              data-action={action}
              data-menuitem={true}
              glyph={icon ? <Icon glyph={icon} /> : undefined}
              onClick={onClick}
            >
              {label}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}

export function ItemActionGroup<Action extends string>({
  actions,
  onAction,
  className,
  iconClassName,
  iconSize = ItemActionButtonSize.Default,
  isVisible = true,
  'data-testid': dataTestId,
}: {
  actions: ItemAction<Action>[];
  onAction(actionName: Action): void;
  className?: string;
  iconClassName?: string;
  iconSize?: ItemActionButtonSize;
  isVisible?: boolean;
  'data-testid'?: string;
}) {
  const onClick = useCallback(
    (evt) => {
      evt.stopPropagation();
      onAction(evt.currentTarget.dataset.action);
    },
    [onAction]
  );

  const shouldRender = isVisible && actions.length > 0;

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={cx(actionControlsStyle, className)}
      data-testid={dataTestId}
    >
      {actions.map(({ action, icon, label }) => {
        return (
          <ItemActionButton
            key={action}
            glyph={icon}
            label={label}
            title={label}
            size={iconSize}
            data-action={action}
            data-testid={actionTestId<Action>(dataTestId, action)}
            onClick={onClick}
            className={cx(actionGroupButtonStyle, iconClassName)}
          ></ItemActionButton>
        );
      })}
    </div>
  );
}

export function ItemActionControls<Action extends string>({
  isVisible = true,
  actions,
  onAction,
  className,
  iconClassName,
  iconSize = ItemActionButtonSize.Default,
  usePortal,
  collapseToMenuThreshold = 2,
  'data-testid': dataTestId,
}: {
  isVisible?: boolean;
  actions: ItemAction<Action>[];
  onAction(actionName: Action): void;
  className?: string;
  iconSize?: ItemActionButtonSize;
  iconClassName?: string;
  collapseToMenuThreshold?: number;
  usePortal?: boolean;
  'data-testid'?: string;
}) {
  if (actions.length === 0) {
    return null;
  }

  const shouldShowMenu = actions.length >= collapseToMenuThreshold;

  if (shouldShowMenu) {
    return (
      <ItemActionMenu
        actions={actions}
        className={className}
        data-testid={dataTestId}
        iconClassName={iconClassName}
        iconSize={iconSize}
        isVisible={isVisible}
        onAction={onAction}
        usePortal={usePortal}
      ></ItemActionMenu>
    );
  }

  return (
    <ItemActionGroup
      isVisible={isVisible}
      actions={actions}
      onAction={onAction}
      className={className}
      iconSize={iconSize}
      data-testid={dataTestId}
      iconClassName={iconClassName}
    ></ItemActionGroup>
  );
}
