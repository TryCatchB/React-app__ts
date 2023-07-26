interface ErrorMessageProps {
  error: string;
}

const Error = ({ error }: ErrorMessageProps) => {
  return (
    <div>{error && <p className="text-center text-red-600">{error}</p>}</div>
  );
};

export default Error;
