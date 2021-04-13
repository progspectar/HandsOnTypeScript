import React from "react";
import "./ErrorBoundary.css";

// we need the getDerivedStateFromError and componentDidCatch life cycle
// event handlers to catch errors.

// 1. we will create a type for our Error Boundary's props called
// ErrorBoundaryProps.
interface ErrorBoundaryProps {
  children: React.ReactNode[];
}

// 2. We must create another type for our Error Boundary's local state called
// ErrorBoundaryState.
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  info: object;
}

//  At the beginning of the ErrorBoundary class
// definition, we will see some boilerplate with the constructor for setting up the state.
// Immediately following this, we will use the getDerivedStateFromError
// function to tell React to show the error UI if hasError is true.
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: new Error(),
      info: { componentStack: "" },
    };
  }

  static getDerivedStateFromError = (error: Error) => {
    return { hasError: true };
  };

  // It is in our componentDidCatch function that our component
  // realizes an error of some kind occurred and sets our hasError state variable to
  // true. We can also run our own code here to log errors and notify support if needed.
  // Finally, if hasError is true, we render our message so that users do not have to
  // see strange technical messages that can be confusing. You can, of course, write your
  // own custom message.
  componentDidCatch(error: Error | null, info: object) {
    console.log("error", error);
    this.setState({ hasError: true, error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2 style={{ padding: "2em" }}>
            Something has gone wrong. Please reload your screen.
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
