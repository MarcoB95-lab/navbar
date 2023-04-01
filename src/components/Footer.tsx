import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto py-5 flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
          © 2023 Web3-Ambassadors
        </div>
        <div className="flex items-center justify-center space-x-6">
          <a href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} className="text-blue-500 hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a href="https://instagram.com/">
            <FontAwesomeIcon icon={faInstagram} className="text-pink-500 hover:text-pink-600 transition-colors duration-300" />
          </a>
          <a href="https://github.com/">
            <FontAwesomeIcon icon={faGithub} className="text-gray-500 hover:text-gray-600 transition-colors duration-300" />
          </a>
        </div>
      </div>
      <style jsx>{`
        footer {
          border-top: 1px solid #e2e8f0;
          position: absolute;
          bottom: 0;
          width: 100%;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
