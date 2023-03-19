import { Component, ErrorInfo, ReactNode } from 'react';
import { logger } from 'utils';

type ErrorBoundaryProps = {
  fallback?: ReactNode;
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
    logger({ name: 'ErrorBoundary getDerivedStateFromError' });

    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    logger({ name: 'ErrorBoundary componentDidCatch', error, info });
  }

  renderDefaultFallback() {
    return <h1>ErrorBoundary default fallback render</h1>;
  }

  render() {
    logger({ name: 'ErrorBoundary render', hasError: this.state.hasError });

    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return this.renderDefaultFallback();
    }

    return this.props.children;
  }
}
