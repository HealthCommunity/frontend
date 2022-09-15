// react library
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Title({ name }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Health | {name}</title>
      </Helmet>
    </HelmetProvider>
  );
}
