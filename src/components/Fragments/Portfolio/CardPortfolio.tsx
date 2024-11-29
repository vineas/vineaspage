interface CardPortfolioProps {
  children: React.ReactNode;
}

interface HeaderProps {
  image: string;
}

interface BodyProps {
  children: React.ReactNode;
}

const CardPortfolio: React.FC<CardPortfolioProps> & {
  Header: React.FC<HeaderProps>;
  Body: React.FC<BodyProps>;
} = (props) => {
  const { children } = props;
  return (
    <div className="shadow-xl rounded-xl">
      {children}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ image }) => (
  <img src={image} alt="portfolio" className="w-full rounded-t-xl" />
);

const Body: React.FC<BodyProps> = ({ children }) => (
  <div className="py-3 px-5">
    <h4 className="text-center font-bold text-sm md:text-lg">{children}</h4>
  </div>
);

CardPortfolio.Header = Header;
CardPortfolio.Body = Body;

export default CardPortfolio;
