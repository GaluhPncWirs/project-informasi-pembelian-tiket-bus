import { Link } from "react-router-dom";

type PropsLinkButton = {
  href: string;
  textButton: string;
};

export default function LinkButton(props: PropsLinkButton) {
  const { href, textButton } = props;
  return (
    <Link
      to={href}
      className="color-primary text-white text-center py-2 px-5 rounded-lg font-semibold hover:bg-blue-900 transition-colors shadow-sm"
    >
      {textButton}
    </Link>
  );
}
