import Catalogue from './components/catalogue';
import CatalogueTree from './components/tree';
import './index.scss';

type OriginInputType = typeof Catalogue;
interface CatalogueInterface extends OriginInputType {
    Tree: typeof CatalogueTree;
}

const WrapperCatalogue = Catalogue;
(WrapperCatalogue as CatalogueInterface).Tree = CatalogueTree;

export default WrapperCatalogue as CatalogueInterface;
