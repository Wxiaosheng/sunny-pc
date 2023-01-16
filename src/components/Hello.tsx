interface HelloProps {
  msg: string;
}

const Hello = (props: HelloProps) => {
  const { msg } = props;

  return <h2>{msg}</h2>;
};

export default Hello;
