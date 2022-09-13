// react library
import { Helmet, HelmetProvider } from "react-helmet-async";

function Title({ name }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Health | {name}</title>
      </Helmet>
    </HelmetProvider>
  );
}

export default Title;
