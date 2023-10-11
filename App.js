import React from "react";
import ReactDOM from "react-dom/client";
import logo from './public/food_logo.png';
import foodImage from './public/food_image.jpg';

/**
 * Header
 * -- Logo
 * -- Nav-Items
 * Body
 * -- Search
 * -- RestaurantContainer
 * -- RestaurantCard
 * Footer
 * -- CopyRight
 * -- Links
 * -- Address
 * -- Contact
 */

// const styleCard = {
//     backgroundColor: "lightgray",
// }

const RestaurantCard = (props) => {
    // console.log(props);
    const {resData} = props;

    const {name,
        cuisines,
        avgRating,
        costForTwo} = resData?.info;
    // console.log(resData);
    return (
        <div className="res-card" style={{backgroundColor:"#F0F0F0"}}>
        <img className="foodimage" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} alt="Food Image"></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        
        </div>
    );
};

const resList = [
    {
        "info": {
            "id": "50374",
            "name": "Dindigul Thalappakatti",
            "cloudinaryImageId": "zf7sbwdhivqxkkz0irs3",
            "locality": "Ram Nagar",
            "areaName": "Ram Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "Barbecue",
                "South Indian",
                "Chinese",
                "North Indian"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "50374",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5200
            },
            "parentId": "332",
            "avgRatingString": "3.9",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 4.7,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "4.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-12 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dindigul-thalappakatti-ram-nagar-coimbatore-50374",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "413573",
            "name": "EatFit - All Things Healthy",
            "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
            "locality": "Thanneerpandal main Road",
            "areaName": "Peelamedu",
            "costForTwo": "₹270 for two",
            "cuisines": [
                "Chinese",
                "Healthy Food",
                "Tandoor",
                "Pizzas",
                "North Indian",
                "Thalis",
                "Biryani"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "413573",
                "fees": [
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4600
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4600
            },
            "parentId": "76139",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-11 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "EVERY ITEM",
                "subHeader": "@ ₹159"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/eatfit-all-things-healthy-thanneerpandal-main-road-peelamedu-coimbatore-413573",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "50958",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "nmuvxvvmtaxei2ifckwj",
            "locality": "Avinash Road",
            "areaName": "Peelamedu",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "50958",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3000
            },
            "parentId": "2456",
            "avgRatingString": "4.0",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 30,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-12 02:55:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹999",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-avinash-road-peelamedu-coimbatore-50958",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "654259",
            "name": "Istah - The Mediterranean Way",
            "cloudinaryImageId": "c6d3c766bf7aa2482161bc4d8323fffc",
            "locality": "Dr Rajendra Prasad Road",
            "areaName": "Gandhipuram",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Mediterranean",
                "Snacks",
                "Biryani",
                "Grill",
                "Kebabs",
                "Arabian",
                "Lebanese",
                "Beverages",
                "Desserts",
                "Italian",
                "Turkish"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "654259",
                "fees": [
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4600
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4600
            },
            "parentId": "3518",
            "avgRatingString": "3.9",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "32 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-11 23:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                        "description": "OnlyOnSwiggy"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "OnlyOnSwiggy",
                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-dr-rajendra-prasad-road-gandhipuram-coimbatore-654259",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "67833",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "sathy main road",
            "areaName": "Sivanandhapuram",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Desserts"
            ],
            "avgRating": 4.5,
            "veg": true,
            "feeDetails": {
                "restaurantId": "67833",
                "fees": [
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 7300
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 7300
            },
            "parentId": "5588",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 6.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "6.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-12 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-sathy-main-road-sivanandhapuram-coimbatore-67833",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "50792",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "Fun Republic Mall",
            "areaName": "Avinashi Road",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "50792",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3600
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3600
            },
            "parentId": "547",
            "avgRatingString": "3.9",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-12 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-fun-republic-mall-avinashi-road-coimbatore-50792",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "67645",
            "name": "Night Lion by Madhampatty Pakashala",
            "cloudinaryImageId": "qgck9fzi17ljdvwboljb",
            "locality": "Gauthama Puri Nagar",
            "areaName": "Peelamedu",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Haleem"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "67645",
                "fees": [
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3800
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3800
            },
            "parentId": "377170",
            "avgRatingString": "3.9",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-12 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/night-lion-by-madhampatty-pakashala-gauthama-puri-nagar-peelamedu-coimbatore-67645",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "82488",
            "name": "The Belgian Waffle Co.",
            "cloudinaryImageId": "8cb220fa3997a3b928d2ffb6c098acaf",
            "locality": "Avinash Road",
            "areaName": "Peelamedu",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Waffle",
                "Desserts",
                "Ice Cream",
                "Beverages"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
                "restaurantId": "82488",
                "fees": [
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3000
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3000
            },
            "parentId": "2233",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-11 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-avinash-road-peelamedu-coimbatore-82488",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "187491",
            "name": "Taco Bell",
            "cloudinaryImageId": "d3b3db238b6448c3f297c851e9d0b96b",
            "locality": "Prozone Mall",
            "areaName": "Ganapathy",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Mexican"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "187491",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 7700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 7700
            },
            "parentId": "1557",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 6.2,
                "serviceability": "SERVICEABLE",
                "slaString": "36 mins",
                "lastMileTravelString": "6.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-12 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "EVERY ITEM",
                "subHeader": "@ ₹149"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/taco-bell-prozone-mall-ganapathy-coimbatore-187491",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "333124",
            "name": "Bakingo",
            "cloudinaryImageId": "upqceq4sumi3kyvlrhpf",
            "locality": "Srinagar Road",
            "areaName": "Peelamedu",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Beverages",
                "Snacks"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "333124",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4400
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4400
            },
            "parentId": "3818",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-11 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/bakingo-srinagar-road-peelamedu-coimbatore-333124",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "530135",
            "name": "WarmOven Cake & Desserts",
            "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
            "locality": "Thaneerpandhal Road",
            "areaName": "Peelamedu",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Ice Cream",
                "Beverages"
            ],
            "avgRating": 3.7,
            "feeDetails": {
                "restaurantId": "530135",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4200
            },
            "parentId": "9696",
            "avgRatingString": "3.7",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-12 01:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-thaneerpandhal-road-peelamedu-coimbatore-530135",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "307773",
            "name": "Barbeque Nation",
            "cloudinaryImageId": "bpn8bctxakzphazs1tj1",
            "locality": "Fun Republic Mall",
            "areaName": "Avinashi Road",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "North Indian",
                "Barbecue",
                "Biryani",
                "Kebabs",
                "Mughlai",
                "Desserts"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "307773",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3600
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3600
            },
            "parentId": "2438",
            "avgRatingString": "3.8",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-11 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/barbeque-nation-fun-republic-mall-avinashi-road-coimbatore-307773",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "56504",
            "name": "McDonald's",
            "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
            "locality": "Brookefields Mall",
            "areaName": "RS Puram",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "56504",
                "fees": [
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 7300
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 7300
            },
            "parentId": "630",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 6.2,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "6.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-12 00:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹1000",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-brookefields-mall-rs-puram-coimbatore-56504",
            "type": "WEBLINK"
        }
    },
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
                <div className="res-container">
                    {
                    resList.map((restaurant) => 
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                    }
                    
                </div>
        </div>
    );
};

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>

    )
}


const AppLayout = () => {
    return (
        <div className="app">
        <Header/>
        <Body />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);