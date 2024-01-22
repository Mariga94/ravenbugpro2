import Link from "next/link";

interface MenuLinkProps {
  item: {
    icon: string;
    path: string;
    title: string;
  };
}
const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {
  return (
    <Link href={item.path} className="">
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
