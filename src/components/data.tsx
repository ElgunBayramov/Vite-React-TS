export interface GalleryItem {
    ID: string;
    Address: string;
    City: string;
    State: string;
    ZipCode: string;
    Beds: string;
    Baths: string;
    HouseSize: number;
    LotSize: string;
    Price: number;
    Coordinates: string;
    Features: string;
    YearBuilt: string;
    Type: string;
    Status: string;
    Image: string;
  }
  
  export const galleryData: GalleryItem[] = [
    {
      ID: '1',
      Address: '652 Avonwick Gate',
      City: 'Toronto',
      State: 'ON',
      ZipCode: 'M3A25',
      Beds: '4',
      Baths: '4',
      HouseSize: 7500,
      LotSize: '0.8',
      Price: 780000,
      Coordinates: '43.7507639, -79.3184378',
      Features: 'Dishwasher, Disposal, Separate laundry room, 3/4 bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Hardwood flooring in kitchen, Kitchen island, Solid surface countertops in kitchen, Entry foyer, Front living room, Ceiling fan in master bedroom, Master bedroom separate from other, Mirrored door closet in master bedroom, 2nd bedroom: 11x13, 3rd bedroom: 11x14, 4th Bedroom: 18x13, Alarm system owned, Built-in microwave, Carpet, Ceiling fan(s), Convection oven, Double built-in gas ovens, Gas cooktop, Gas stove, Marble/Stone floors',
      YearBuilt: '2008',
      Type: '0',
      Status: '1',
      Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/3.jpg',
    },
    {
      ID: '2',
      Address: '82649 Topeka St',
      City: 'Riverbank',
      State: 'CA',
      ZipCode: '95360',
      Beds: '5',
      Baths: '3',
      HouseSize: 12500,
      LotSize: '1.2',
      Price: 1750000,
      Coordinates: '37.7369999,-120.9430488',
      Features: 'Dishwasher, Disposal, Separate laundry room, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Pantry, Walk-in pantry, Entry foyer, Formal living room, Rear living room, Vaulted ceiling in living room, Balcony in master bedroom, Master bedroom separate from other, Master bedroom upstairs, Sitting room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 13X20, 3rd bedroom: 13X17, 4th Bedroom: 13X18, 5th Bedroom: 14X16, Alarm system owned, Blinds, Built-in electric oven, Built-in microwave, Carpet, Ceiling fan(s), Gas cooktop, Intercom system, Marble/Stone floors, Water conditioner owned, Water filtering system, Window Coverings Throughout',
      YearBuilt: '2009',
      Type: '0',
      Status: '0',
      Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/4.jpg',
    },
    {
      ID: '3',
      Address: '328 S Kerema Ave',
      City: 'Milford',
      State: 'CT',
      ZipCode: '06465',
      Beds: '4',
      Baths: '2',
      HouseSize: 8356,
      LotSize: '0.04',
      Price: 350000,
      Coordinates: '41.1957999,-73.1022988',
      Features: 'Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 2nd floor, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Wet bar in family room, Breakfast nook (eating area), Garden window in kitchen, Granite countertops in kitchen, Kitchen island, Marble/Stone flooring in kitchen, Pantry, Formal living room, Front living room, Ceiling fan in master bedroom, Master bedroom separate from other, Master bedroom upstairs, Sitting room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 16x12, 3rd bedroom: 13x16, 4th Bedroom: 18x12, Alarm system owned, Built-in microwave, Carpet, Ceiling fan(s), Double built-in electric ovens, Gas cooktop, Marble/Stone floors',
      YearBuilt: '2010',
      Type: '0',
      Status: '0',
      Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/5.jpg',
    },
    {
      ID: '4',
      Address: '5119 Beryl Dr',
      City: 'San Antonio',
      State: 'TX',
      ZipCode: '78212',
      Beds: '4',
      Baths: '2',
      HouseSize: 7980,
      LotSize: '0.7',
      Price: 455000,
      Coordinates: '29.4972699,-98.5366788',
      Features: 'Dishwasher, Disposal, Refrigerator, Separate laundry room, Full bath downstairs, Living/Dining room combo, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Recessed lighting in kitchen, Tile flooring in kitchen, Walk-in pantry, Formal living room, Front living room, Ceiling fan in master bedroom, Master bedroom downstairs, Walk-in closet in master bedroom, 2nd bedroom: 15x13, 3rd bedroom: 12x12, 4th Bedroom: 14x12, Alarm system owned, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Central vacuum, Convection oven, Double built-in electric ovens, Electric cooktop, Intercom system, Tile floors',
      YearBuilt: '2007',
      Type: '0',
      Status: '1',
      Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/6.jpg',
    },
    {
      ID: '5',
      Address: '61207 16th St N',
      City: 'Moorhead',
      State: 'MN',
      ZipCode: '56564',
      Beds: '5',
      Baths: '4',
      HouseSize: 14250,
      LotSize: '1.1',
      Price: 1700000,
      Coordinates: '46.88933,-96.7522388',
      Features: 'Dishwasher, Disposal, Separate laundry room, Washer/Dryer on 1st floor, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Formal living room, Rear living room, Sunken living room, Vaulted ceiling in living room, Balcony in master bedroom, Ceiling fan in master bedroom, Master bedroom separate from other, Master bedroom upstairs, Walk-in closet in master bedroom, 2nd bedroom: 16X17, 3rd bedroom: 14X16, 4th Bedroom: 13X13, 5th Bedroom: 12X12, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Central vacuum, Double built-in electric ovens, Gas cooktop, Marble/Stone floors, Pot shelves, Water conditioner owned, Water filtering system, Window Coverings Throughout',
      YearBuilt: '2010',
      Type: '0',
      Status: '0',
      Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/7.jpg',
    },
    {
      ID: '6',
      Address: '8512 Tanglewood Cir',
      City: 'Reform',
      State: 'AL',
      ZipCode: '35487',
      Beds: '3',
      Baths: '2',
      HouseSize: 5600,
      LotSize: '0.2',
      Price: 250000,
      Coordinates: '33.3794,-87.9785788',
      Features: 'Dishwasher, Disposal, Refrigerator, Separate laundry room, Full bath downstairs, Formal dining room, Built-in bookcases in family room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Marble/Stone flooring in kitchen, Pantry, Formal living room, Front living room, Ceiling fan in master bedroom, Master bedroom downstairs, Master bedroom separate from other, Sitting room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 11X15, 3rd bedroom: 11X14, Alarm system owned, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Double built-in electric ovens, Drapes, Electric cooktop, Marble/Stone floors, Window Coverings Throughout, Wine refrigerator',
      YearBuilt: '2011',
      Type: '0',
      Status: '0',
      Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/8.jpg',
    },
    {
      ID: '7',
      Address: '7121 Bailey St',
      City: 'Worcester',
      State: 'MA',
      ZipCode: '01605',
      Beds: '4',
      Baths: '3',
      HouseSize: 6900,
      LotSize: '2.1',
      Price: 555000,
      Coordinates: '42.2797,-71.8746388',
      Features: 'Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 1st floor, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Kitchen island, Recessed lighting in kitchen, Tile countertops in kitchen, Walk-in pantry, Entry foyer, Formal living room, Front living room, Dressing room in master bedroom, Master bedroom separate from other, Master bedroom upstairs, Walk-in closet in master bedroom, 2nd bedroom: 14x16, 3rd bedroom: 12x13, 4th Bedroom: 13x14, Carpet, Double built-in electric ovens, Drywall, Gas cooktop, Manmade wood or laminate floors, Marble/Stone floors, Water conditioner loope',
      YearBuilt: '2008',
      Type: '0',
      Status: '1',
      Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/9.jpg',
    },
    {
      ID: '8',
      Address: '620201 Plymouth Rd',
      City: 'Detroit',
      State: 'MI',
      ZipCode: ' 48224',
      Beds: '4',
      Baths: '4',
      HouseSize: 7840,
      LotSize: '0.33',
      Price: 610000,
      Coordinates: '42.3716299,-83.2572188',
      Features: 'Dishwasher, Disposal, Refrigerator, Separate laundry room, Full bath downstairs, Formal dining room, 2+ family rooms, Separate family room, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Walk-in pantry, Entry foyer, Formal living room, Rear living room, Vaulted ceiling in living room, Ceiling fan in master bedroom, Master bedroom downstairs, Walk-in closet in master bedroom, 2nd bedroom: 12x15, 3rd bedroom: 12x15, 4th Bedroom: 12x15, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Electric cooktop, Shutters, Skylight(s), Water conditioner owned, Water filtering system, Window coverings partial',
      YearBuilt: '2010',
      Type: '0',
      Status: '0',
      Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/1.jpg',
    },
    {
      ID: '9',
      Address: '1198 Theresa Cir',
      City: 'Whitinsville',
      State: 'MA',
      ZipCode: '01582',
      Beds: '4',
      Baths: '3',
      HouseSize: 4990,
      LotSize: '0.8',
      Price: 320000,
      Coordinates: '42.1072,-71.6928888',
      Features: 'Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 1st floor, 1/2 bath downstairs, Formal dining room, 2+ family rooms, Built-in bookcases in family room, Breakfast Bar/Counter, Granite countertops in kitchen, Kitchen island, Tile flooring in kitchen, Walk-in pantry, Entry foyer, Formal living room, Built-in bookcases in master bedroom, Built-in entertainment center in master bedroom, Ceiling fan in master bedroom, Dressing room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 13x12, 3rd bedroom: 12x12, 4th Bedroom: 13x12, Alarm system rented, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Double built-in gas ovens, Tile floors, Window Coverings Throughout',
      YearBuilt: '2011',
      Type: '0',
      Status: '0',
      Image: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gallery/2.jpg',
    },
  ];
  

  export const mapTypes: { key: any; name: string }[] = [
    {
      key: 'roadmap',
      name: 'Road Map',
    },
    {
      key: 'satellite',
      name: 'Satellite (Photographic) Map',
    },
    {
      key: 'hybrid',
      name: 'Hybrid Map',
    },
  ];
  
  export const mapTypeLabel: { 'aria-label': string } = { 'aria-label': 'Map Type' };
  
  