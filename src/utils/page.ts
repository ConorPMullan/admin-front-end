export const PageTitle = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}): JSX.Element => {
  document.title = `Pet Food Experts - ${title}`;

  return children;
};

export default PageTitle;
