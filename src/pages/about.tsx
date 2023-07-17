import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import { galleryData } from '../components/data.tsx';
import Item from '../components/item.tsx';
import { Gallery } from 'devextreme-react/gallery';
import Map from 'devextreme-react/map';
import SelectBox from 'devextreme-react/select-box';
import { mapTypes, mapTypeLabel } from '../components/data.tsx';
const apiKey = {
    bing: 'Aq3LKP2BOmzWY47TZoT1YdieypN_rB6RY9FqBfx-MDCKjvvWBbT68R51xwbL-AqC',
  };


export default function About(){
    const [mapTypeValue, setMapTypeValue] = React.useState(mapTypes[0].key);

  const onMapTypeChange = React.useCallback((value:any) => {
    setMapTypeValue(value);
  }, [setMapTypeValue]);
    return (
        <div>
        <div className='widget-container'>
        <Gallery
          dataSource={galleryData}
          height={440}
          width='100%'
          loop={true}
          showIndicator={false}
          itemRender={Item} />
      </div>
      <Map
        className='map'
        defaultCenter="40.7061, -73.9969"
        defaultZoom={14}
        height={400}
        width="100%"
        provider="bing"
        type={mapTypeValue}
        apiKey={apiKey}
      >
      </Map>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Map Type</span>
          <SelectBox
            value={mapTypeValue}
            onValueChange={onMapTypeChange}
            dataSource={mapTypes}
            inputAttr={mapTypeLabel}
            displayExpr="name"
            valueExpr="key"
          />
        </div>
      </div>
        </div>
    )
}