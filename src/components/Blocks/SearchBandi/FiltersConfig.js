//import { useSelector } from 'react-redux';
import DefaultFilters from 'io-sanita-theme/components/Blocks/SearchBandi/DefaultFilters';

/*
  ***
  componente linkato nel config del blocco nella prop 'searchConfig' per modificare/aggiungere tipologie di Filtri
  ***
 */
const FiltersConfig = (dispatchFilter, path, block_id) => {
  // const subsite = useSelector((state) => state.subsite?.data);
  const defaultFilters = DefaultFilters(path, block_id);

  return {
    ...defaultFilters,
    //aggiungere qui le proprie customizzazioni/nuovi filtri
  };
};

export default FiltersConfig;
