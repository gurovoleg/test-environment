import { Component, ErrorInfo, ReactNode, ComponentType } from 'react';
import { logger } from 'utils';

type ErrorBoundaryProps = {
  fallback?: ComponentType<{ resetError: () => void }>;
  children?: ReactNode;
};

type ErrorBoundaryState = {
  hasError?: boolean;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    logger({ name: 'ErrorBoundary componentDidCatch', error, info });
  }

  renderDefaultFallback() {
    return <h1>ErrorBoundary default fallback render</h1>;
  }

  resetError() {
    this.setState({ hasError: false });
  }

  render() {
    const { fallback: FallBack } = this.props;

    if (this.state.hasError) {
      if (typeof FallBack === 'function') {
        return <FallBack resetError={this.resetError.bind(this)} />;
      }

      return this.renderDefaultFallback();
    }

    return this.props.children;
  }
}
