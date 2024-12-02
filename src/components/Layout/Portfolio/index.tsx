import portfolios from "./portfolio";
import { useEffect, useState } from "react";
import CardPortfolio from "../../Fragments/Portfolio/CardPortfolio";
import PaginationPortfolio from "../../Fragments/Portfolio/PaginationPortfolio";
import TabsPortfolio from "../../Fragments/Portfolio/TabsPortfolio";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const { portfolioApps, portfolioDesign, portfolioVideo } = portfolios;

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [currentPage, setCurrentPage] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setCurrentPage(1);
  }, []);

  if (!isClient) return null;

  const handleNextClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const itemsPerPage = 4;
  const sortedData = [...portfolioApps].sort((a, b) => b.id - a.id);
  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const tabs = [
    { id: "web", label: "Apps" },
    { id: "design", label: "Design" },
    { id: "video", label: "Video" },
  ];

  return (
    <div id="portfolio" className="py-20 bg-white">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="text-5xl font-bold text-center mb-3">Portfolio</h3>
      </motion.div>
      <TabsPortfolio
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Apps Portfolio */}
      {activeTab === "web" && (
        <motion.div className="grid grid-cols-2 md:grid-cols-4 w-11/12 md:container mx-auto gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}>
          {currentData.map((item) => (
            <CardPortfolio key={item.id}>
              <Link to={item.link}>
                <CardPortfolio.Header image={item.imageUrl} />
                <CardPortfolio.Body>{item.title}</CardPortfolio.Body>
              </Link>
            </CardPortfolio>
          ))}
        </motion.div>
      )}

      {/* Pagination */}
      {activeTab === "web" && (
        <PaginationPortfolio>
          <PaginationPortfolio.PaginationInfo
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
          />
          <div className="inline-flex mt-2 xs:mt-0">
            <PaginationPortfolio.PaginationButton
              onClick={handlePrevClick}
              disabled={currentPage === 1}
            >
              Prev
            </PaginationPortfolio.PaginationButton>
            <PaginationPortfolio.PaginationButton
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            >
              Next
            </PaginationPortfolio.PaginationButton>
          </div>
        </PaginationPortfolio>
      )}

      {/* Design Portfolio */}
      {activeTab === "design" && (
        <motion.div
          className="md:container mx-auto justify-center"
          style={{ width: "280px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {portfolioDesign.map((item) => (
            <CardPortfolio key={item.id}>
              <Link to={item.link}>
                <CardPortfolio.Header image={item.imageUrl} />
                <CardPortfolio.Body>{item.title}</CardPortfolio.Body>
              </Link>
            </CardPortfolio>
          ))}
        </motion.div>
      )}

      {/* Video Portfolio */}
      {activeTab === "video" && (
        <motion.div
          className="md:container mx-auto justify-center"
          style={{ width: "280px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {portfolioVideo.map((item) => (
            <CardPortfolio key={item.id}>
              <Link to={item.link}>
                <CardPortfolio.Header image={item.imageUrl} />
                <CardPortfolio.Body>{item.title}</CardPortfolio.Body>
              </Link>
            </CardPortfolio>
          ))}
        </motion.div>
      )}
    </div>
  );
};
