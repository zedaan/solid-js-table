import { Component, Show } from 'solid-js';
import ButtonWrapper from './styles';
import LoadingIcon from '../Table/components/LoadingState/LoadingIcon';

type IVariant = 'primary' | 'danger' | 'ghost' | 'ghost-primary' | 'ghost-danger' | 'disabled';

interface IButtonProps {
  variant?: IVariant;
  className?: string;
  size?: string;
  iconBefore?: any;
  iconAfter?: any;
  children?: any;
  loading?: boolean;
  block?: boolean;
  onClick?: Function;
}

const Button: Component<IButtonProps> = (props) => {
  const {
    children,
    variant,
    className,
    size,
    iconBefore,
    iconAfter,
    loading,
    block,
    onClick,
    ...rest
  } = props;

  const renderLeftIcon = () => (
    <Show when={iconBefore}>
      <span className="icon icon--left">{iconBefore}</span>
    </Show>
  )

  const renderRightICon = () => (
    <Show when={iconAfter}>
      <span className="icon icon--right">{iconAfter}</span>
    </Show>
  )

  const renderLoading = () => (
    <Show when={loading}>
      <span className="loading--icon">
        <LoadingIcon />
      </span>
      Loading
    </Show>
  )

  return (
    <ButtonWrapper
      className={`btn--${variant || 'default'} ${className || ''} btn--${size || 'sm'} ${loading ? 'btn--loading': ''} ${block ? 'btn--block' : ''}`}
      {...rest}
      disabled={variant === 'disabled'}
      onClick={(e: any) => {
        e.target.classList.add('active');
        setTimeout(() => {
          console.log({e: e.target});
          e.target.classList.remove('active');
        }, 150);
        onClick && onClick(e);
      }}

    >
      <Show when={!loading} fallback={renderLoading()}>
        {renderLeftIcon()}
        {props.children}
        {renderRightICon()}
      </Show>
    </ButtonWrapper>
  )
}

export default Button;
