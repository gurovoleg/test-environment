import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { CenteredColumnContainer } from '../../styles/global.styled';
import { ErrorWrapper } from './Error.styled';

type ErrorMessageProps = {
  status: number;
  statusText: string;
  data: Record<string, unknown>;
};

const ErrorMessage = ({
  status,
  statusText,
  data,
}: ErrorMessageProps): JSX.Element => {
  return (
    <>
      {status && <div>Status: {status}</div>}
      {statusText && <div>StatusText: {statusText}</div>}
      {data?.message && <div>{data.message as string}</div>}
    </>
  );
};

export const Error = (): JSX.Element => {
  const error = useRouteError();
  const renderMessage = isRouteErrorResponse(error);

  return (
    <ErrorWrapper>
      <CenteredColumnContainer>
        <h1>Oops!</h1>
        <h2>Something went wrong.</h2>
        {renderMessage && <ErrorMessage {...error} />}
      </CenteredColumnContainer>
    </ErrorWrapper>
  );
};
