import React from 'react';
import Banner from '../Banner/Banner';
import VegInfo from '../Veginfo/VegInfo';
import VgItems from '../VgItems/VgItems';

import NewArrivalVegetable from '../NewArrivalVegetable/NewArrivalVegetable';
import VillageProductionVideo from '../VillageProductionVideo/VillageProductionVideo';
import PopularBrand from '../PopularBrand/PopularBrand';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VegInfo></VegInfo>
            <VgItems></VgItems>
           
            <NewArrivalVegetable></NewArrivalVegetable>
            <VillageProductionVideo></VillageProductionVideo>
            <PopularBrand></PopularBrand>
            <Contact></Contact>
        </div>
    );
};

export default Home;