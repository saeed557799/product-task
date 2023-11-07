const StringToJsxParser = ({ data }) => {
  return <div dangerouslySetInnerHTML={{ __html: data }}></div>;
};
export default StringToJsxParser;
