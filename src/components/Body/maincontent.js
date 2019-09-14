import React, { Component } from 'react'
import MegaMenu from './Carousel/megamenu';
import Slider from './Carousel/slider';
import ItemRight from './Carousel/itemright';
import HotSlider from './ListPrice/hotslider';
import ProductTab from './Product/producttab';
import NewArrivals from './Arrivals/newarrivals';
import ListAdv from './Adv/listadv';
import FlagShip from './Stores/flagship';
import FashionCat from './Fashion/fashioncat';

export default class Mainbody extends Component {
    render() {
        return (
            <div>
                <div id="content">
                    <div className="container">
                        <div className="content-top4">
                        <div className="row">
                            <div className="col-md-9 col-sm-12 col-xs-12">
                            <div className="content-top-left4">
                                <MegaMenu />
                                <Slider />
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="content-top-right4">
                              <ItemRight />
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* End Content Top */}
                        
                        <HotSlider />
                        {/* End List Cat Price */}
                        <ProductTab />

                        <NewArrivals />

                        <ListAdv />
                        
                        <FlagShip />

                        <FashionCat />
                        {/* End Product Tab */}
                    </div>
                </div>

            </div>
        )
    }
}

 