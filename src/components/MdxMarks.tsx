import styled from "@emotion/styled";
type NameProps = {
  name: string;
  link: string;
  title: string;
  description?: string;
};

const Typography = styled.div`
  margin-bottom: 16px;
  margin-top: 0;
`;

const Link = styled.a({
  "&:hover": {
    color: "unset",
  },
});

export const Name = (props: NameProps) => {
  return (
    <>
      <Typography>
        <span style={{ fontSize: "1em" }}>
          <Link href={props.link} target="_blank">
            {props.name}
          </Link>
        </span>
        <span style={{ color: "#57606a" }}>
          {" | "}
          {props.title}
        </span>
      </Typography>
      {props.description ? (
        <Typography>
          <span style={{ color: "#aaa" }}>{props.description}</span>
        </Typography>
      ) : null}
    </>
  );
};

export const Padding = () => {
  return <div style={{ paddingTop: "1em" }} />;
};
