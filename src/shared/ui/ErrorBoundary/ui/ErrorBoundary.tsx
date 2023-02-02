import React, { Component, PropsWithChildren } from 'react';

type ErrorBoundaryState = { hasError: false } | { hasError: true; error: Error };

type ErrorBoundaryProps = PropsWithChildren<{ fallback: React.ReactNode }>;

// eslint-disable-next-line react/no-unused-prop-types
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  } // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.

  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  //   sentryLogs(error, errorInfo);
  // }

  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      return fallback;
    }
    return children;
  }
}

export default ErrorBoundary;
