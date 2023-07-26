interface LoadingMessageProps {
  loading: boolean;
}

const Loader = ({ loading }: LoadingMessageProps) => {
  return <div>{loading && <p className="text-center">Loading...</p>}</div>;
};

export default Loader;
