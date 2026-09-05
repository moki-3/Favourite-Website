import "./home.css";

type NameLink = {
  name: string;
  link: string;
};

type LinkBoxProps = {
  heading: string;
  nameLink: NameLink[];
};

export default function Home() {
  return (
    <div>
      <p>Home</p>
    </div>
  );
}
