import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from 'react-router-dom';
import { CenteredColumnContainer } from '../../styles/global.styled';
import { ErrorWrapper } from './Error.styled';
import { Button } from 'components';

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

export const Error = ({ resetError }: { resetError(): void }): JSX.Element => {
  const error = useRouteError();
  const renderMessage = isRouteErrorResponse(error);

  const navigate = useNavigate();

  return (
    <ErrorWrapper>
      <CenteredColumnContainer>
        <h1>Oops!</h1>
        <h2>Something went wrong.</h2>
        {renderMessage && <ErrorMessage {...error} />}
        <br />

        <Button
          label="Go to Main page"
          onClick={() => {
            if (resetError) {
              resetError();
              navigate({
                pathname: '/',
              });
            }
          }}
        />
      </CenteredColumnContainer>
    </ErrorWrapper>
  );
};
