import type { Trip } from "./types"

// Hardcoded response data for the demo

export const mockDundeeTrip: Trip = {
    "route": [
        {
            "id": 2296550,
            "departure": {
                "scheduled": "2025-09-01T16:05:00+00:00",
                "actual": "2025-09-01T16:05:02+00:00",
                "estimated": "2025-09-01T16:05:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-01T16:05:00+00:00",
                "actual": "2025-09-01T16:02:43+00:00",
                "estimated": "2025-09-01T16:05:00+00:00"
            },
            "location": {
                "id": 218,
                "type": "STOP_POINT",
                "name": "Dundee Slessor Gardens",
                "region_name": "Dundee",
                "code": "DUN",
                "code_detail": "Slessor Gardens",
                "detailed_name": "Slessor Gardens",
                "lon": -2.966036,
                "lat": 56.459319,
                "atco_code": "6400LL99",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.459542218608334,
                        "longitude": -2.966276800467473
                    },
                    {
                        "latitude": 56.459116641801984,
                        "longitude": -2.96554414986868
                    },
                    {
                        "latitude": 56.45900595021118,
                        "longitude": -2.965733748522858
                    },
                    {
                        "latitude": 56.45942485291969,
                        "longitude": -2.9664919017183045
                    },
                    {
                        "latitude": 56.459542218608334,
                        "longitude": -2.966276800467473
                    }
                ],
                "heading": 135,
                "area_id": 13
            },
            "allow_boarding": true,
            "allow_drop_off": false,
            "booking_cut_off_mins": 0,
            "pre_booked_only": false,
            "skipped": false
        },
        {
            "id": 2296551,
            "departure": {
                "scheduled": "2025-09-01T16:14:00+00:00",
                "actual": "2025-09-01T16:15:10+00:00",
                "estimated": "2025-09-01T16:14:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-01T16:14:00+00:00",
                "actual": "2025-09-01T16:12:36+00:00",
                "estimated": "2025-09-01T16:12:15+00:00"
            },
            "location": {
                "id": 2,
                "type": "STOP_POINT",
                "name": "Dundee West",
                "region_name": "Dundee West",
                "code": "DUN",
                "code_detail": "Dundee West",
                "detailed_name": "Apollo Way",
                "lon": -3.05468,
                "lat": 56.462677,
                "google_place_id": "ChIJE2gJVwlDhkgRBp7tM4HaqS0",
                "atco_code": "6400L00019",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.46256507145948,
                        "longitude": -3.0550262330871196
                    },
                    {
                        "latitude": 56.462403053205456,
                        "longitude": -3.0547294020652775
                    },
                    {
                        "latitude": 56.46270436715984,
                        "longitude": -3.0541500449180607
                    },
                    {
                        "latitude": 56.462859468797895,
                        "longitude": -3.054468333612022
                    },
                    {
                        "latitude": 56.46256507145948,
                        "longitude": -3.0550262330871196
                    }
                ],
                "heading": 45,
                "area_id": 14
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2296552,
            "departure": {
                "scheduled": "2025-09-01T16:22:00+00:00",
                "actual": "2025-09-01T16:22:19+00:00",
                "estimated": "2025-09-01T16:22:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-01T16:22:00+00:00",
                "actual": "2025-09-01T16:21:43+00:00",
                "estimated": "2025-09-01T16:21:57+00:00"
            },
            "location": {
                "id": 33,
                "type": "STOP_POINT",
                "name": "Longforgan",
                "region_name": "Longforgan",
                "code": "LFG",
                "code_detail": "Longforgan",
                "detailed_name": "Westbound Slip Road",
                "direction": "WESTBOUND",
                "lon": -3.1286,
                "lat": 56.45718,
                "google_place_id": "ChIJFT_RJGdBhkgRYxkAqkW68GY",
                "atco_code": "64804203",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.457394470261235,
                        "longitude": -3.1286752219602927
                    },
                    {
                        "latitude": 56.45716919447582,
                        "longitude": -3.128925561904907
                    },
                    {
                        "latitude": 56.456884633679266,
                        "longitude": -3.1281888482772047
                    },
                    {
                        "latitude": 56.457157337818515,
                        "longitude": -3.1278240678511793
                    },
                    {
                        "latitude": 56.457394470261235,
                        "longitude": -3.1286752219602927
                    }
                ],
                "heading": 270,
                "area_id": 47
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2296553,
            "departure": {
                "scheduled": "2025-09-01T16:24:00+00:00",
                "estimated": "2025-09-01T16:24:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-01T16:24:00+00:00",
                "estimated": "2025-09-01T16:22:19+00:00"
            },
            "location": {
                "id": 3,
                "type": "STOP_POINT",
                "name": "Inchture",
                "region_name": "Inchture",
                "code": "INC",
                "code_detail": "Inchture",
                "detailed_name": "Road End (Westbound)",
                "direction": "WESTBOUND",
                "lon": -3.170071,
                "lat": 56.447108,
                "google_place_id": "ChIJa-OPGCRBhkgRqINJzMi0mc0",
                "atco_code": "64800191",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.44792778370844,
                        "longitude": -3.169394731085048
                    },
                    {
                        "latitude": 56.447749890193236,
                        "longitude": -3.1689512727461984
                    },
                    {
                        "latitude": 56.445903701655475,
                        "longitude": -3.171147107641445
                    },
                    {
                        "latitude": 56.44614090434802,
                        "longitude": -3.171762228012084
                    },
                    {
                        "latitude": 56.44792778370844,
                        "longitude": -3.169394731085048
                    }
                ],
                "heading": 225,
                "area_id": 15
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": true
        },
        {
            "id": 2296554,
            "departure": {
                "scheduled": "2025-09-01T16:28:00+00:00",
                "estimated": "2025-09-01T16:28:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-01T16:28:00+00:00",
                "estimated": "2025-09-01T16:28:00+00:00"
            },
            "location": {
                "id": 219,
                "type": "STOP_POINT",
                "name": "Horn Milk Bar (Inchmichael)",
                "region_name": "Horn Milk Bar",
                "code": "HMB",
                "code_detail": "Horn Milk Bar",
                "detailed_name": "A90 Westbound (Near Inchmichael)",
                "lon": -3.22355,
                "lat": 56.42313,
                "google_place_id": "ChIJl2G8ClFHhkgRyROv47gKkJI",
                "atco_code": "64802223",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.423240519394184,
                        "longitude": -3.2235198969103673
                    },
                    {
                        "latitude": 56.423169690344636,
                        "longitude": -3.2233826802107806
                    },
                    {
                        "latitude": 56.423033091090865,
                        "longitude": -3.223620522490064
                    },
                    {
                        "latitude": 56.423098861163176,
                        "longitude": -3.2237348697397197
                    },
                    {
                        "latitude": 56.423240519394184,
                        "longitude": -3.2235198969103673
                    }
                ],
                "heading": 222,
                "area_id": 221
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": true
        },
        {
            "id": 2296555,
            "departure": {
                "scheduled": "2025-09-01T16:34:00+00:00",
                "actual": "2025-09-01T16:39:45+00:00",
                "estimated": "2025-09-01T16:38:49+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-01T16:34:00+00:00",
                "actual": "2025-09-01T16:38:53+00:00",
                "estimated": "2025-09-01T16:38:49+00:00"
            },
            "location": {
                "id": 31,
                "type": "STOP_POINT",
                "name": "St Madoes",
                "region_name": "St Madoes",
                "code": "STM",
                "code_detail": "St Madoes",
                "detailed_name": "St Madoes Green",
                "direction": "WESTBOUND",
                "lon": -3.30666,
                "lat": 56.37536,
                "google_place_id": "ChIJ-7_7UqQ5hkgR54w_LXj3974",
                "atco_code": "64801650",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.37553553466398,
                        "longitude": -3.3067435026168814
                    },
                    {
                        "latitude": 56.37534437027729,
                        "longitude": -3.3060486349879716
                    },
                    {
                        "latitude": 56.37478591097687,
                        "longitude": -3.3060724763138927
                    },
                    {
                        "latitude": 56.37523451962018,
                        "longitude": -3.3070760965347286
                    },
                    {
                        "latitude": 56.37553553466398,
                        "longitude": -3.3067435026168814
                    }
                ],
                "heading": 315,
                "area_id": 46
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2296556,
            "departure": {
                "scheduled": "2025-09-01T16:39:00+00:00",
                "estimated": "2025-09-01T16:42:45+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-01T16:39:00+00:00",
                "estimated": "2025-09-01T16:42:45+00:00"
            },
            "location": {
                "id": 5,
                "type": "STOP_POINT",
                "name": "Walnut Grove",
                "region_name": "Walnut Grove",
                "code": "PTH",
                "code_detail": "Walnut Grove",
                "detailed_name": "West Road End (for Perth)",
                "lon": -3.404654,
                "lat": 56.382796,
                "google_place_id": "ChIJHTQF-6o7hkgRW4XWXa1kbdc",
                "atco_code": "64801647",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.38307990585553,
                        "longitude": -3.4051787853240962
                    },
                    {
                        "latitude": 56.38290566874258,
                        "longitude": -3.404105901718139
                    },
                    {
                        "latitude": 56.381618665708096,
                        "longitude": -3.4047281742095943
                    },
                    {
                        "latitude": 56.381828549392274,
                        "longitude": -3.405622243662947
                    },
                    {
                        "latitude": 56.38307990585553,
                        "longitude": -3.4051787853240962
                    }
                ],
                "heading": 180,
                "area_id": 16
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": true
        },
        {
            "id": 2296557,
            "departure": {
                "scheduled": "2025-09-01T16:46:00+00:00",
                "actual": "2025-09-01T16:50:07+00:00",
                "estimated": "2025-09-01T16:49:02+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-01T16:46:00+00:00",
                "actual": "2025-09-01T16:49:17+00:00",
                "estimated": "2025-09-01T16:49:02+00:00"
            },
            "location": {
                "id": 48,
                "type": "STOP_POINT",
                "name": "Bridge of Earn",
                "region_name": "Bridge of Earn",
                "code": "BOE",
                "code_detail": "Bridge of Earn",
                "detailed_name": "Old Edinburgh Road",
                "lon": -3.402653,
                "lat": 56.344795,
                "google_place_id": "ChIJK_IWfX06hkgRdYmM9l9rUBU",
                "atco_code": "64802696",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.34488518734358,
                        "longitude": -3.4022462363645896
                    },
                    {
                        "latitude": 56.344655280875656,
                        "longitude": -3.40271830515121
                    },
                    {
                        "latitude": 56.34488915135803,
                        "longitude": -3.403126001248893
                    },
                    {
                        "latitude": 56.345130948022884,
                        "longitude": -3.402696847479091
                    },
                    {
                        "latitude": 56.34488518734358,
                        "longitude": -3.4022462363645896
                    }
                ],
                "heading": 135,
                "area_id": 54
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2296558,
            "departure": {
                "scheduled": "2025-09-01T17:02:00+00:00",
                "estimated": "2025-09-01T17:04:29+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-01T17:02:00+00:00",
                "estimated": "2025-09-01T17:04:29+00:00"
            },
            "location": {
                "id": 6,
                "type": "STOP_POINT",
                "name": "Kinross P&R",
                "region_name": "Kinross",
                "code": "KIR",
                "code_detail": "Kinross P&R",
                "detailed_name": "Park & Ride",
                "lon": -3.433365,
                "lat": 56.206317,
                "google_place_id": "ChIJi2G0f3syhkgRpiaZ20yWrj0",
                "atco_code": "64804323",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.20657269850862,
                        "longitude": -3.433522582054137
                    },
                    {
                        "latitude": 56.20603563039676,
                        "longitude": -3.433393836021422
                    },
                    {
                        "latitude": 56.20609232127476,
                        "longitude": -3.432476520538329
                    },
                    {
                        "latitude": 56.206718899081004,
                        "longitude": -3.4326803684234615
                    },
                    {
                        "latitude": 56.206638339650894,
                        "longitude": -3.4335654973983756
                    },
                    {
                        "latitude": 56.20657269850862,
                        "longitude": -3.433522582054137
                    }
                ],
                "heading": 90,
                "area_id": 17
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2296559,
            "departure": {
                "scheduled": "2025-09-01T17:19:00+00:00",
                "estimated": "2025-09-01T17:19:29+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-01T17:19:00+00:00",
                "estimated": "2025-09-01T17:19:29+00:00"
            },
            "location": {
                "id": 7,
                "type": "STOP_POINT",
                "name": "Rosyth",
                "region_name": "Rosyth",
                "code": "ROS",
                "code_detail": "Rosyth",
                "detailed_name": "St John's & St Columba's Church",
                "lon": -3.415373,
                "lat": 56.036069,
                "google_place_id": "ChIJF1mMfCbOh0gRv2ekZY5TgDU",
                "atco_code": "6500D0254",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.03619930007082,
                        "longitude": -3.4157851338386536
                    },
                    {
                        "latitude": 56.036094407234714,
                        "longitude": -3.4148302674293514
                    },
                    {
                        "latitude": 56.035880624731846,
                        "longitude": -3.414908945505886
                    },
                    {
                        "latitude": 56.03599351007766,
                        "longitude": -3.41587632894516
                    },
                    {
                        "latitude": 56.03619930007082,
                        "longitude": -3.4157851338386536
                    }
                ],
                "heading": 90,
                "area_id": 18
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2296560,
            "departure": {
                "scheduled": "2025-09-01T17:35:00+00:00",
                "estimated": "2025-09-01T17:35:29+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-01T17:35:00+00:00",
                "estimated": "2025-09-01T17:35:29+00:00"
            },
            "location": {
                "id": 25,
                "type": "STOP_POINT",
                "name": "Ingliston P&R",
                "region_name": "Edinburgh",
                "code": "EDI",
                "code_detail": "Ingliston P&R",
                "detailed_name": "Ingliston P&R (Bus Stop)",
                "local_name": "the bus stop",
                "lon": -3.35609,
                "lat": 55.93907,
                "google_place_id": "ChIJiyELPgHFh0gRNQNkuGaZJ3g",
                "atco_code": "6200247604",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 55.93912014254329,
                        "longitude": -3.356469869613648
                    },
                    {
                        "latitude": 55.93924833303975,
                        "longitude": -3.3559763431549077
                    },
                    {
                        "latitude": 55.93839906325638,
                        "longitude": -3.355354070663452
                    },
                    {
                        "latitude": 55.93827087013271,
                        "longitude": -3.3558976645872463
                    },
                    {
                        "latitude": 55.93912014254329,
                        "longitude": -3.356469869613648
                    }
                ],
                "heading": 315,
                "area_id": 45
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2296561,
            "departure": {
                "scheduled": "2025-09-01T17:43:00+00:00",
                "estimated": "2025-09-01T17:43:29+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-01T17:43:00+00:00",
                "estimated": "2025-09-01T17:43:29+00:00"
            },
            "location": {
                "id": 222,
                "type": "STOP_POINT",
                "name": "Edinburgh Corstorphine",
                "region_name": "Edinburgh",
                "code": "EDI",
                "code_detail": "Corstorphine",
                "detailed_name": "Corstorphine (Eastbound)",
                "lon": -3.287015,
                "lat": 55.943189,
                "google_place_id": "ChIJI_ZdRHnGh0gRTfsgtlM3Jw0",
                "atco_code": "6200202750",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 55.943283005523426,
                        "longitude": -3.2872936537585815
                    },
                    {
                        "latitude": 55.94303501054907,
                        "longitude": -3.287360149934841
                    },
                    {
                        "latitude": 55.942983509796136,
                        "longitude": -3.2867333881006857
                    },
                    {
                        "latitude": 55.94324972833482,
                        "longitude": -3.286659817863267
                    },
                    {
                        "latitude": 55.943283005523426,
                        "longitude": -3.2872936537585815
                    }
                ],
                "heading": 100,
                "area_id": 226
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2296562,
            "departure": {
                "scheduled": "2025-09-01T17:52:00+00:00",
                "estimated": "2025-09-01T17:52:29+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-01T17:52:00+00:00",
                "estimated": "2025-09-01T17:52:29+00:00"
            },
            "location": {
                "id": 28,
                "type": "STOP_POINT",
                "name": "Haymarket",
                "region_name": "Edinburgh",
                "code": "EDI",
                "code_detail": "Haymarket (HB)",
                "detailed_name": "Haymarket (Stop HB)",
                "direction": "EASTBOUND",
                "lon": -3.218346,
                "lat": 55.945944,
                "google_place_id": "ChIJtdKcu6XHh0gRj31N-EL5iIg",
                "atco_code": "6200202930",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 55.945996759992546,
                        "longitude": -3.217969536672172
                    },
                    {
                        "latitude": 55.94581452078557,
                        "longitude": -3.217969536672172
                    },
                    {
                        "latitude": 55.94583654976943,
                        "longitude": -3.219063877950248
                    },
                    {
                        "latitude": 55.94603681237606,
                        "longitude": -3.219060301562423
                    },
                    {
                        "latitude": 55.945996759992546,
                        "longitude": -3.217969536672172
                    }
                ],
                "heading": 90,
                "area_id": 43
            },
            "allow_boarding": false,
            "allow_drop_off": true,
            "booking_cut_off_mins": 0,
            "pre_booked_only": false,
            "skipped": false
        },
        {
            "id": 2296563,
            "departure": {
                "scheduled": "2025-09-01T18:02:00+00:00",
                "estimated": "2025-09-01T18:02:29+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-01T18:02:00+00:00",
                "estimated": "2025-09-01T18:02:29+00:00"
            },
            "location": {
                "id": 175,
                "type": "STOP_POINT",
                "name": "George Street (Stop GL)",
                "region_name": "Edinburgh",
                "code": "EDI",
                "code_detail": "George St (GL)",
                "detailed_name": "George Street (Stop GL)",
                "lon": -3.19549,
                "lat": 55.95395,
                "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
                "atco_code": "6200206490",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 55.95393198830283,
                        "longitude": -3.19590088477814
                    },
                    {
                        "latitude": 55.95377939447384,
                        "longitude": -3.195819771310044
                    },
                    {
                        "latitude": 55.95389942984702,
                        "longitude": -3.195124451156351
                    },
                    {
                        "latitude": 55.95405031477016,
                        "longitude": -3.195210121329188
                    },
                    {
                        "latitude": 55.95393198830283,
                        "longitude": -3.19590088477814
                    }
                ],
                "heading": 75,
                "area_id": 42
            },
            "allow_boarding": false,
            "allow_drop_off": true,
            "booking_cut_off_mins": 0,
            "pre_booked_only": false,
            "skipped": false
        }
    ],
    "vehicle": {
        "wheelchair": 1,
        "bicycle": 2,
        "seat": 53,
        "id": 45,
        "plate_number": "SG24 UHP",
        "name": "Yutong Coach (SG24 UHP)",
        "has_wifi": true,
        "has_toilet": true,
        "type": "coach",
        "brand": "Ember",
        "colour": "Black",
        "is_backup_vehicle": false,
        "owner_id": 1,
        "gps": {
            "last_updated": "2025-09-01T18:02:58.875000+01:00",
            "longitude": -3.43746,
            "latitude": 56.2157416,
            "heading": 182
        },
        "secondary_gps": {
            "last_updated": "2025-09-01T17:02:57.999000+00:00",
            "longitude": -3.43748240388776,
            "latitude": 56.21575773524728,
            "heading": 183.1935272216797
        }
    },
    "description": {
        "route_number": "E1",
        "pattern_id": 37172,
        "calendar_date": "2025-09-01",
        "type": "public",
        "is_cancelled": false,
        "route_id": 1
    }
};

export const mockDundeeTripStopped = JSON.parse(JSON.stringify(mockDundeeTrip)) as Trip;
mockDundeeTripStopped.route[8].arrival.actual = mockDundeeTripStopped.route[8].arrival.estimated;
mockDundeeTripStopped.route[8].departure.estimated = "2025-09-01T17:09:29+00:00"

export const mockDundeeTripScheduled: Trip = {
    "route": [
        {
            "id": 2304074,
            "departure": {
                "scheduled": "2025-09-03T19:05:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-03T19:05:00+00:00"
            },
            "location": {
                "id": 218,
                "type": "STOP_POINT",
                "name": "Dundee Slessor Gardens",
                "region_name": "Dundee",
                "code": "DUN",
                "code_detail": "Slessor Gardens",
                "detailed_name": "Slessor Gardens",
                "lon": -2.966036,
                "lat": 56.459319,
                "atco_code": "6400LL99",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.459542218608334,
                        "longitude": -2.966276800467473
                    },
                    {
                        "latitude": 56.459116641801984,
                        "longitude": -2.96554414986868
                    },
                    {
                        "latitude": 56.45900595021118,
                        "longitude": -2.965733748522858
                    },
                    {
                        "latitude": 56.45942485291969,
                        "longitude": -2.9664919017183045
                    },
                    {
                        "latitude": 56.459542218608334,
                        "longitude": -2.966276800467473
                    }
                ],
                "heading": 135,
                "area_id": 13
            },
            "allow_boarding": true,
            "allow_drop_off": false,
            "booking_cut_off_mins": 0,
            "pre_booked_only": false,
            "skipped": false
        },
        {
            "id": 2304075,
            "departure": {
                "scheduled": "2025-09-03T19:13:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-03T19:13:00+00:00"
            },
            "location": {
                "id": 2,
                "type": "STOP_POINT",
                "name": "Dundee West",
                "region_name": "Dundee West",
                "code": "DUN",
                "code_detail": "Dundee West",
                "detailed_name": "Apollo Way",
                "lon": -3.05468,
                "lat": 56.462677,
                "google_place_id": "ChIJE2gJVwlDhkgRBp7tM4HaqS0",
                "atco_code": "6400L00019",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.46256507145948,
                        "longitude": -3.0550262330871196
                    },
                    {
                        "latitude": 56.462403053205456,
                        "longitude": -3.0547294020652775
                    },
                    {
                        "latitude": 56.46270436715984,
                        "longitude": -3.0541500449180607
                    },
                    {
                        "latitude": 56.462859468797895,
                        "longitude": -3.054468333612022
                    },
                    {
                        "latitude": 56.46256507145948,
                        "longitude": -3.0550262330871196
                    }
                ],
                "heading": 45,
                "area_id": 14
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2304076,
            "departure": {
                "scheduled": "2025-09-03T19:19:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-03T19:19:00+00:00"
            },
            "location": {
                "id": 33,
                "type": "STOP_POINT",
                "name": "Longforgan",
                "region_name": "Longforgan",
                "code": "LFG",
                "code_detail": "Longforgan",
                "detailed_name": "Westbound Slip Road",
                "direction": "WESTBOUND",
                "lon": -3.1286,
                "lat": 56.45718,
                "google_place_id": "ChIJFT_RJGdBhkgRYxkAqkW68GY",
                "atco_code": "64804203",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.457394470261235,
                        "longitude": -3.1286752219602927
                    },
                    {
                        "latitude": 56.45716919447582,
                        "longitude": -3.128925561904907
                    },
                    {
                        "latitude": 56.456884633679266,
                        "longitude": -3.1281888482772047
                    },
                    {
                        "latitude": 56.457157337818515,
                        "longitude": -3.1278240678511793
                    },
                    {
                        "latitude": 56.457394470261235,
                        "longitude": -3.1286752219602927
                    }
                ],
                "heading": 270,
                "area_id": 47
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2304077,
            "departure": {
                "scheduled": "2025-09-03T19:21:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-03T19:21:00+00:00"
            },
            "location": {
                "id": 3,
                "type": "STOP_POINT",
                "name": "Inchture",
                "region_name": "Inchture",
                "code": "INC",
                "code_detail": "Inchture",
                "detailed_name": "Road End (Westbound)",
                "direction": "WESTBOUND",
                "lon": -3.170071,
                "lat": 56.447108,
                "google_place_id": "ChIJa-OPGCRBhkgRqINJzMi0mc0",
                "atco_code": "64800191",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.44792778370844,
                        "longitude": -3.169394731085048
                    },
                    {
                        "latitude": 56.447749890193236,
                        "longitude": -3.1689512727461984
                    },
                    {
                        "latitude": 56.445903701655475,
                        "longitude": -3.171147107641445
                    },
                    {
                        "latitude": 56.44614090434802,
                        "longitude": -3.171762228012084
                    },
                    {
                        "latitude": 56.44792778370844,
                        "longitude": -3.169394731085048
                    }
                ],
                "heading": 225,
                "area_id": 15
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2304078,
            "departure": {
                "scheduled": "2025-09-03T19:24:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-03T19:24:00+00:00"
            },
            "location": {
                "id": 219,
                "type": "STOP_POINT",
                "name": "Horn Milk Bar (Inchmichael)",
                "region_name": "Horn Milk Bar",
                "code": "HMB",
                "code_detail": "Horn Milk Bar",
                "detailed_name": "A90 Westbound (Near Inchmichael)",
                "lon": -3.22355,
                "lat": 56.42313,
                "google_place_id": "ChIJl2G8ClFHhkgRyROv47gKkJI",
                "atco_code": "64802223",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.423240519394184,
                        "longitude": -3.2235198969103673
                    },
                    {
                        "latitude": 56.423169690344636,
                        "longitude": -3.2233826802107806
                    },
                    {
                        "latitude": 56.423033091090865,
                        "longitude": -3.223620522490064
                    },
                    {
                        "latitude": 56.423098861163176,
                        "longitude": -3.2237348697397197
                    },
                    {
                        "latitude": 56.423240519394184,
                        "longitude": -3.2235198969103673
                    }
                ],
                "heading": 222,
                "area_id": 221
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2304079,
            "departure": {
                "scheduled": "2025-09-03T19:30:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-03T19:30:00+00:00"
            },
            "location": {
                "id": 31,
                "type": "STOP_POINT",
                "name": "St Madoes",
                "region_name": "St Madoes",
                "code": "STM",
                "code_detail": "St Madoes",
                "detailed_name": "St Madoes Green",
                "direction": "WESTBOUND",
                "lon": -3.30666,
                "lat": 56.37536,
                "google_place_id": "ChIJ-7_7UqQ5hkgR54w_LXj3974",
                "atco_code": "64801650",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.37553553466398,
                        "longitude": -3.3067435026168814
                    },
                    {
                        "latitude": 56.37534437027729,
                        "longitude": -3.3060486349879716
                    },
                    {
                        "latitude": 56.37478591097687,
                        "longitude": -3.3060724763138927
                    },
                    {
                        "latitude": 56.37523451962018,
                        "longitude": -3.3070760965347286
                    },
                    {
                        "latitude": 56.37553553466398,
                        "longitude": -3.3067435026168814
                    }
                ],
                "heading": 315,
                "area_id": 46
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2304080,
            "departure": {
                "scheduled": "2025-09-03T19:35:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-03T19:35:00+00:00"
            },
            "location": {
                "id": 5,
                "type": "STOP_POINT",
                "name": "Walnut Grove",
                "region_name": "Walnut Grove",
                "code": "PTH",
                "code_detail": "Walnut Grove",
                "detailed_name": "West Road End (for Perth)",
                "lon": -3.404654,
                "lat": 56.382796,
                "google_place_id": "ChIJHTQF-6o7hkgRW4XWXa1kbdc",
                "atco_code": "64801647",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.38307990585553,
                        "longitude": -3.4051787853240962
                    },
                    {
                        "latitude": 56.38290566874258,
                        "longitude": -3.404105901718139
                    },
                    {
                        "latitude": 56.381618665708096,
                        "longitude": -3.4047281742095943
                    },
                    {
                        "latitude": 56.381828549392274,
                        "longitude": -3.405622243662947
                    },
                    {
                        "latitude": 56.38307990585553,
                        "longitude": -3.4051787853240962
                    }
                ],
                "heading": 180,
                "area_id": 16
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2304081,
            "departure": {
                "scheduled": "2025-09-03T19:41:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-03T19:41:00+00:00"
            },
            "location": {
                "id": 48,
                "type": "STOP_POINT",
                "name": "Bridge of Earn",
                "region_name": "Bridge of Earn",
                "code": "BOE",
                "code_detail": "Bridge of Earn",
                "detailed_name": "Old Edinburgh Road",
                "lon": -3.402653,
                "lat": 56.344795,
                "google_place_id": "ChIJK_IWfX06hkgRdYmM9l9rUBU",
                "atco_code": "64802696",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.34488518734358,
                        "longitude": -3.4022462363645896
                    },
                    {
                        "latitude": 56.344655280875656,
                        "longitude": -3.40271830515121
                    },
                    {
                        "latitude": 56.34488915135803,
                        "longitude": -3.403126001248893
                    },
                    {
                        "latitude": 56.345130948022884,
                        "longitude": -3.402696847479091
                    },
                    {
                        "latitude": 56.34488518734358,
                        "longitude": -3.4022462363645896
                    }
                ],
                "heading": 135,
                "area_id": 54
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2304082,
            "departure": {
                "scheduled": "2025-09-03T19:56:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-03T19:56:00+00:00"
            },
            "location": {
                "id": 6,
                "type": "STOP_POINT",
                "name": "Kinross P&R",
                "region_name": "Kinross",
                "code": "KIR",
                "code_detail": "Kinross P&R",
                "detailed_name": "Park & Ride",
                "lon": -3.433365,
                "lat": 56.206317,
                "google_place_id": "ChIJi2G0f3syhkgRpiaZ20yWrj0",
                "atco_code": "64804323",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.20657269850862,
                        "longitude": -3.433522582054137
                    },
                    {
                        "latitude": 56.20603563039676,
                        "longitude": -3.433393836021422
                    },
                    {
                        "latitude": 56.20609232127476,
                        "longitude": -3.432476520538329
                    },
                    {
                        "latitude": 56.206718899081004,
                        "longitude": -3.4326803684234615
                    },
                    {
                        "latitude": 56.206638339650894,
                        "longitude": -3.4335654973983756
                    },
                    {
                        "latitude": 56.20657269850862,
                        "longitude": -3.433522582054137
                    }
                ],
                "heading": 90,
                "area_id": 17
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2304083,
            "departure": {
                "scheduled": "2025-09-03T20:13:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-03T20:13:00+00:00"
            },
            "location": {
                "id": 7,
                "type": "STOP_POINT",
                "name": "Rosyth",
                "region_name": "Rosyth",
                "code": "ROS",
                "code_detail": "Rosyth",
                "detailed_name": "St John's & St Columba's Church",
                "lon": -3.415373,
                "lat": 56.036069,
                "google_place_id": "ChIJF1mMfCbOh0gRv2ekZY5TgDU",
                "atco_code": "6500D0254",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 56.03619930007082,
                        "longitude": -3.4157851338386536
                    },
                    {
                        "latitude": 56.036094407234714,
                        "longitude": -3.4148302674293514
                    },
                    {
                        "latitude": 56.035880624731846,
                        "longitude": -3.414908945505886
                    },
                    {
                        "latitude": 56.03599351007766,
                        "longitude": -3.41587632894516
                    },
                    {
                        "latitude": 56.03619930007082,
                        "longitude": -3.4157851338386536
                    }
                ],
                "heading": 90,
                "area_id": 18
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2304084,
            "departure": {
                "scheduled": "2025-09-03T20:27:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-03T20:27:00+00:00"
            },
            "location": {
                "id": 25,
                "type": "STOP_POINT",
                "name": "Ingliston P&R",
                "region_name": "Edinburgh",
                "code": "EDI",
                "code_detail": "Ingliston P&R",
                "detailed_name": "Ingliston P&R (Bus Stop)",
                "local_name": "the bus stop",
                "lon": -3.35609,
                "lat": 55.93907,
                "google_place_id": "ChIJiyELPgHFh0gRNQNkuGaZJ3g",
                "atco_code": "6200247604",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 55.93912014254329,
                        "longitude": -3.356469869613648
                    },
                    {
                        "latitude": 55.93924833303975,
                        "longitude": -3.3559763431549077
                    },
                    {
                        "latitude": 55.93839906325638,
                        "longitude": -3.355354070663452
                    },
                    {
                        "latitude": 55.93827087013271,
                        "longitude": -3.3558976645872463
                    },
                    {
                        "latitude": 55.93912014254329,
                        "longitude": -3.356469869613648
                    }
                ],
                "heading": 315,
                "area_id": 45
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2304085,
            "departure": {
                "scheduled": "2025-09-03T20:31:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-03T20:31:00+00:00"
            },
            "location": {
                "id": 222,
                "type": "STOP_POINT",
                "name": "Edinburgh Corstorphine",
                "region_name": "Edinburgh",
                "code": "EDI",
                "code_detail": "Corstorphine",
                "detailed_name": "Corstorphine (Eastbound)",
                "lon": -3.287015,
                "lat": 55.943189,
                "google_place_id": "ChIJI_ZdRHnGh0gRTfsgtlM3Jw0",
                "atco_code": "6200202750",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 55.943283005523426,
                        "longitude": -3.2872936537585815
                    },
                    {
                        "latitude": 55.94303501054907,
                        "longitude": -3.287360149934841
                    },
                    {
                        "latitude": 55.942983509796136,
                        "longitude": -3.2867333881006857
                    },
                    {
                        "latitude": 55.94324972833482,
                        "longitude": -3.286659817863267
                    },
                    {
                        "latitude": 55.943283005523426,
                        "longitude": -3.2872936537585815
                    }
                ],
                "heading": 100,
                "area_id": 226
            },
            "allow_boarding": true,
            "allow_drop_off": true,
            "booking_cut_off_mins": 10,
            "pre_booked_only": true,
            "skipped": false
        },
        {
            "id": 2304086,
            "departure": {
                "scheduled": "2025-09-03T20:38:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-03T20:38:00+00:00"
            },
            "location": {
                "id": 28,
                "type": "STOP_POINT",
                "name": "Haymarket",
                "region_name": "Edinburgh",
                "code": "EDI",
                "code_detail": "Haymarket (HB)",
                "detailed_name": "Haymarket (Stop HB)",
                "direction": "EASTBOUND",
                "lon": -3.218346,
                "lat": 55.945944,
                "google_place_id": "ChIJtdKcu6XHh0gRj31N-EL5iIg",
                "atco_code": "6200202930",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 55.945996759992546,
                        "longitude": -3.217969536672172
                    },
                    {
                        "latitude": 55.94581452078557,
                        "longitude": -3.217969536672172
                    },
                    {
                        "latitude": 55.94583654976943,
                        "longitude": -3.219063877950248
                    },
                    {
                        "latitude": 55.94603681237606,
                        "longitude": -3.219060301562423
                    },
                    {
                        "latitude": 55.945996759992546,
                        "longitude": -3.217969536672172
                    }
                ],
                "heading": 90,
                "area_id": 43
            },
            "allow_boarding": false,
            "allow_drop_off": true,
            "booking_cut_off_mins": 0,
            "pre_booked_only": false,
            "skipped": false
        },
        {
            "id": 2304087,
            "departure": {
                "scheduled": "2025-09-03T20:47:00+00:00"
            },
            "arrival": {
                "scheduled": "2025-09-03T20:47:00+00:00"
            },
            "location": {
                "id": 175,
                "type": "STOP_POINT",
                "name": "George Street (Stop GL)",
                "region_name": "Edinburgh",
                "code": "EDI",
                "code_detail": "George St (GL)",
                "detailed_name": "George Street (Stop GL)",
                "lon": -3.19549,
                "lat": 55.95395,
                "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
                "atco_code": "6200206490",
                "has_future_activity": true,
                "timezone": "Europe/London",
                "zone": [
                    {
                        "latitude": 55.95393198830283,
                        "longitude": -3.19590088477814
                    },
                    {
                        "latitude": 55.95377939447384,
                        "longitude": -3.195819771310044
                    },
                    {
                        "latitude": 55.95389942984702,
                        "longitude": -3.195124451156351
                    },
                    {
                        "latitude": 55.95405031477016,
                        "longitude": -3.195210121329188
                    },
                    {
                        "latitude": 55.95393198830283,
                        "longitude": -3.19590088477814
                    }
                ],
                "heading": 75,
                "area_id": 42
            },
            "allow_boarding": false,
            "allow_drop_off": true,
            "booking_cut_off_mins": 0,
            "pre_booked_only": false,
            "skipped": false
        }
    ],
    "vehicle": {
        "seat": 53,
        "wheelchair": 1,
        "bicycle": 2,
        "id": 74,
        "plate_number": "SG25 HYR",
        "name": "Yutong Coach (SG25 HYR)",
        "has_wifi": true,
        "has_toilet": true,
        "type": "coach",
        "brand": "Ember",
        "colour": "black",
        "is_backup_vehicle": false,
        "owner_id": 4,
        "gps": {
            "last_updated": "2025-09-03T10:44:17.780000+01:00",
            "longitude": -4.54408,
            "latitude": 55.9441583,
            "heading": 138
        },
        "secondary_gps": {
            "last_updated": "2025-09-03T10:44:17.780000+01:00",
            "longitude": -4.54408,
            "latitude": 55.9441583,
            "heading": 138
        }
    },
    "description": {
        "route_number": "E1",
        "pattern_id": 37184,
        "calendar_date": "2025-09-03",
        "type": "public",
        "is_cancelled": false,
        "route_id": 1
    }
}
