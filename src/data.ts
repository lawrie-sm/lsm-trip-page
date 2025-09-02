// NOTE_LSM: Hardcoded response date for the demo

import type { Trip } from "./types"

export const mockDate = new Date("2025-09-01T18:00:00Z");

export const mockTrip: Trip = {
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

export const mockQuoteRes = {
    "quotes": [
        {
            "availability": {
                "seat": 37,
                "bicycle": 2,
                "wheelchair": 1
            },
            "prices": {
                "adult": 920,
                "child": 460,
                "young_child": 0,
                "concession": 0,
                "seat": 0,
                "wheelchair": 0,
                "bicycle": 0
            },
            "legs": [
                {
                    "type": "scheduled_transit",
                    "trip_uid": "z4rXUfY2vrnsgV2KuRN3Qw",
                    "adds_capacity_for_trip_uid": null,
                    "origin": {
                        "id": 218,
                        "atco_code": "6400LL99",
                        "detailed_name": "Slessor Gardens",
                        "lat": 56.459319,
                        "lon": -2.966036,
                        "name": "Dundee Slessor Gardens",
                        "region_name": "Dundee",
                        "type": "STOP_POINT",
                        "code": "DUN",
                        "code_detail": "Slessor Gardens",
                        "timezone": "Europe/London",
                        "heading": 135,
                        "zone": [
                            {
                                "longitude": -2.966276800467473,
                                "latitude": 56.459542218608334
                            },
                            {
                                "longitude": -2.96554414986868,
                                "latitude": 56.459116641801984
                            },
                            {
                                "longitude": -2.965733748522858,
                                "latitude": 56.45900595021118
                            },
                            {
                                "longitude": -2.966491901718304,
                                "latitude": 56.45942485291969
                            },
                            {
                                "longitude": -2.966276800467473,
                                "latitude": 56.459542218608334
                            }
                        ],
                        "has_future_activity": true,
                        "area_id": 13,
                        "location_time_id": 2296550,
                        "booking_cut_off_mins": 0,
                        "pre_booked_only": false,
                        "skipped": false,
                        "bookable": "2025-09-01T16:05:00+00:00"
                    },
                    "destination": {
                        "id": 175,
                        "atco_code": "6200206490",
                        "detailed_name": "George Street (Stop GL)",
                        "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
                        "lat": 55.95395,
                        "lon": -3.19549,
                        "name": "George Street (Stop GL)",
                        "region_name": "Edinburgh",
                        "type": "STOP_POINT",
                        "code": "EDI",
                        "code_detail": "George St (GL)",
                        "timezone": "Europe/London",
                        "heading": 75,
                        "zone": [
                            {
                                "longitude": -3.19590088477814,
                                "latitude": 55.95393198830283
                            },
                            {
                                "longitude": -3.195819771310044,
                                "latitude": 55.95377939447384
                            },
                            {
                                "longitude": -3.195124451156351,
                                "latitude": 55.95389942984702
                            },
                            {
                                "longitude": -3.195210121329188,
                                "latitude": 55.95405031477016
                            },
                            {
                                "longitude": -3.19590088477814,
                                "latitude": 55.95393198830283
                            }
                        ],
                        "has_future_activity": true,
                        "area_id": 42,
                        "location_time_id": 2296563,
                        "booking_cut_off_mins": 0,
                        "pre_booked_only": false,
                        "skipped": false,
                        "bookable": "2025-09-01T18:02:00+00:00"
                    },
                    "departure": {
                        "scheduled": "2025-09-01T16:05:00+00:00",
                        "actual": "2025-09-01T16:05:02+00:00",
                        "estimated": "2025-09-01T16:05:00+00:00"
                    },
                    "arrival": {
                        "scheduled": "2025-09-01T18:02:00+00:00",
                        "estimated": "2025-09-01T18:02:29+00:00"
                    },
                    "description": {
                        "brand": "Ember",
                        "operator": "Ember",
                        "destination_board": "E1",
                        "number_plate": "SG24 UHP",
                        "vehicle_type": "coach",
                        "colour": "Black",
                        "amenities": {
                            "has_wifi": true,
                            "has_toilet": true
                        },
                        "is_electric": true
                    },
                    "trip_type": "public"
                }
            ],
            "bookable": true
        },
    ],
    "min_card_transaction": 30
};

// Aberdeen Data
////{
//    "quotesJson": {
//        "quotes": [
//            {
//                "availability": {
//                    "seat": 42,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "bavSqHmkUEkFjDvCeccrjL",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299110,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T12:37:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299109,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T14:35:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T12:40:00+00:00",
//                            "estimated": "2025-09-02T12:40:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T14:35:00+00:00",
//                            "estimated": "2025-09-02T14:35:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG24 UJJ",
//                            "vehicle_type": "coach",
//                            "colour": "Black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 1,
//                    "bicycle": 1,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "2err5TuLGLe6TYFBT6uLpK",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300404,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T07:00:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300417,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T09:02:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T07:00:00+00:00",
//                            "actual": "2025-09-02T07:00:33+00:00",
//                            "estimated": "2025-09-02T07:00:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T09:02:00+00:00",
//                            "actual": "2025-09-02T09:10:39+00:00",
//                            "estimated": "2025-09-02T09:10:48+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG24 UHP",
//                            "vehicle_type": "coach",
//                            "colour": "Black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 10,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "dwH2MsX5YT8vN7jPzaFQhp",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300221,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T08:00:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300234,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T10:01:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T08:00:00+00:00",
//                            "actual": "2025-09-02T08:09:55+00:00",
//                            "estimated": "2025-09-02T08:08:36+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T10:01:00+00:00",
//                            "actual": "2025-09-02T10:14:39+00:00",
//                            "estimated": "2025-09-02T10:14:41+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG24 UJD",
//                            "vehicle_type": "coach",
//                            "colour": "Black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 38,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "MtntxkNz9mHyKjYsZWy9fr",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299218,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T16:31:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299217,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T18:25:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T16:35:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T18:25:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HXZ",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 42,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "5nDVDEhxFTEjzDs2hePCWR",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299083,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T11:27:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299082,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T13:26:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T11:30:00+00:00",
//                            "estimated": "2025-09-02T11:30:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T13:26:00+00:00",
//                            "estimated": "2025-09-02T13:26:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HYT",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 47,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "juQLLgxFFaJoP3CQiKfCNY",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300235,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T12:10:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300248,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T14:08:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T12:10:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T14:08:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HZF",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 50,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "uyuYteosZLybwC3QSc49V5",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299191,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T15:31:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299190,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T17:30:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T15:35:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T17:30:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HYU",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 51,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "NYd57NYGDBtQ8VGW2rwqDa",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300333,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T19:05:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300346,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T20:47:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T19:05:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T20:47:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG24 UJW",
//                            "vehicle_type": "coach",
//                            "colour": "Black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 25,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "z3T9wMvsC3Ukd9koghhkMt",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299002,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T08:27:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299001,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T10:28:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T08:30:00+00:00",
//                            "actual": "2025-09-02T08:30:30+00:00",
//                            "estimated": "2025-09-02T08:30:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T10:28:00+00:00",
//                            "actual": "2025-09-02T10:29:53+00:00",
//                            "estimated": "2025-09-02T10:29:48+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HXX",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 31,
//                    "bicycle": 2,
//                    "wheelchair": 0
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "2RbeLPMu3gdTCy2RmwhaiD",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300150,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T10:00:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300163,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T12:01:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T10:00:00+00:00",
//                            "actual": "2025-09-02T10:01:06+00:00",
//                            "estimated": "2025-09-02T10:00:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T12:01:00+00:00",
//                            "estimated": "2025-09-02T12:01:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HYB",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 53,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "TKzmSQynxTGWATDWqtFasD",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299326,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T21:44:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299325,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T23:21:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T21:45:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T23:21:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HZJ",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 46,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "uT22fYAoQ6bL9GtdBuCnpL",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300263,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T14:05:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300276,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T16:06:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T14:05:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T16:06:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HZD",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 53,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "ZF7bRUpVDF9ZML8gSYjC7d",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300460,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T21:10:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300473,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T22:48:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T21:10:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T22:48:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HZD",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 31,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "YFQn9hvsLsmAZ2ZcKjxxQH",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299436,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T06:27:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299435,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T08:32:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T06:30:00+00:00",
//                            "actual": "2025-09-02T06:34:41+00:00",
//                            "estimated": "2025-09-02T06:34:34+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T08:32:00+00:00",
//                            "actual": "2025-09-02T08:40:37+00:00",
//                            "estimated": "2025-09-02T08:40:31+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HXZ",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 33,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "TGpi42fXC8AHdtcaxePzDC",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300136,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T09:00:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300149,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T11:01:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T09:00:00+00:00",
//                            "actual": "2025-09-02T09:00:11+00:00",
//                            "estimated": "2025-09-02T09:00:55+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T11:01:00+00:00",
//                            "actual": "2025-09-02T10:56:48+00:00",
//                            "estimated": "2025-09-02T10:57:05+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HZR",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 38,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "RTpcdfjF4FuQdAMGHYRhFJ",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300432,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T11:00:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300445,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T12:58:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T11:00:00+00:00",
//                            "actual": "2025-09-02T11:00:37+00:00",
//                            "estimated": "2025-09-02T11:00:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T12:58:00+00:00",
//                            "estimated": "2025-09-02T12:58:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG24 UJN",
//                            "vehicle_type": "coach",
//                            "colour": "Black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 52,
//                    "bicycle": 1,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "b94ScgwQ7edqhsesZhWsNu",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299299,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T19:33:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299298,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T21:13:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T19:35:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T21:13:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG24 UJD",
//                            "vehicle_type": "coach",
//                            "colour": "Black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 28,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "xa2V6N98CZFadrLMavwNYb",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2298893,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T04:28:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2298892,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T06:18:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T04:30:00+00:00",
//                            "actual": "2025-09-02T04:31:28+00:00",
//                            "estimated": "2025-09-02T04:30:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T06:18:00+00:00",
//                            "actual": "2025-09-02T06:19:03+00:00",
//                            "estimated": "2025-09-02T06:19:08+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HYA",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 24,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "X2g5b5NnbpTNYf2cnDUqv7",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2298975,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T07:28:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2298974,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T09:28:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T07:30:00+00:00",
//                            "actual": "2025-09-02T07:31:46+00:00",
//                            "estimated": "2025-09-02T07:30:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T09:28:00+00:00",
//                            "actual": "2025-09-02T09:27:45+00:00",
//                            "estimated": "2025-09-02T09:27:01+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HXY",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 36,
//                    "bicycle": 1,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "rZNybAh5kNG8d6iSweQc9H",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299382,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T03:27:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299381,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T05:23:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T03:30:00+00:00",
//                            "actual": "2025-09-02T03:30:02+00:00",
//                            "estimated": "2025-09-02T03:30:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T05:23:00+00:00",
//                            "actual": "2025-09-02T05:29:56+00:00",
//                            "estimated": "2025-09-02T05:29:57+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HYN",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 53,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "kpaxQgMjCcqLgzZDYap5AC",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300305,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T18:05:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300318,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T19:53:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T18:05:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T19:53:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HZF",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 35,
//                    "bicycle": 2,
//                    "wheelchair": 0
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "Zoe8GJ8gsvmdz2ETTAhUYZ",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299056,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T10:27:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299055,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T12:27:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T10:30:00+00:00",
//                            "actual": "2025-09-02T10:31:55+00:00",
//                            "estimated": "2025-09-02T10:31:35+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T12:27:00+00:00",
//                            "estimated": "2025-09-02T12:27:01+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HZJ",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 31,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "ieiWwTVcLjz8eWCndDcqYe",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2296423,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T01:45:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2296437,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T03:32:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T01:45:00+00:00",
//                            "actual": "2025-09-02T01:47:37+00:00",
//                            "estimated": "2025-09-02T01:46:03+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T03:32:00+00:00",
//                            "actual": "2025-09-02T03:30:39+00:00",
//                            "estimated": "2025-09-02T03:30:34+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG24 UJD",
//                            "vehicle_type": "coach",
//                            "colour": "Black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 43,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "cgJem3HHiiPCqYu5Y6RGC3",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300249,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T13:05:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300262,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T15:04:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T13:05:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T15:04:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HYF",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 45,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "bJzpMwS3wPoqVC3oMXGkpc",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300291,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T16:05:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300304,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T18:02:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T16:05:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T18:02:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HYK",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 33,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "a5mwzgWpG7SmL5gqZJjSxR",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299029,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T09:27:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299028,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T11:28:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T09:30:00+00:00",
//                            "actual": "2025-09-02T09:31:10+00:00",
//                            "estimated": "2025-09-02T09:30:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T11:28:00+00:00",
//                            "estimated": "2025-09-02T11:17:15+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HZH",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 32,
//                    "bicycle": 1,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "2m2FBtt736hhZXHbj4Ze43",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300122,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T05:00:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300135,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T06:58:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T05:00:00+00:00",
//                            "actual": "2025-09-02T05:00:09+00:00",
//                            "estimated": "2025-09-02T05:00:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T06:58:00+00:00",
//                            "actual": "2025-09-02T07:23:27+00:00",
//                            "estimated": "2025-09-02T07:23:19+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HYK",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 51,
//                    "bicycle": 1,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "XV4a2tL7azWctxhYh39B7o",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299571,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T20:34:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299570,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T22:12:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T20:35:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T22:12:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HXW",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 39,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "cJoK3xCJhbmnaVf3a3C3Uc",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299137,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T13:37:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299136,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T15:37:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T13:40:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T15:37:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HYN",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 53,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "FoDqFi5rTwcAXhhTkFkSJB",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300389,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T22:55:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300403,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-03T00:39:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T22:55:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-03T00:39:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG24 UHL",
//                            "vehicle_type": "coach",
//                            "colour": "Black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 26,
//                    "bicycle": 1,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "Ksx6EQFa3birPGPk9EFfMv",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300193,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T06:00:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300206,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T08:06:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T06:00:00+00:00",
//                            "actual": "2025-09-02T06:00:15+00:00",
//                            "estimated": "2025-09-02T06:00:35+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T08:06:00+00:00",
//                            "actual": "2025-09-02T08:10:49+00:00",
//                            "estimated": "2025-09-02T08:10:53+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HZD",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 48,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "vp3jPMw8DFEcrm86A2eaRV",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300446,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T17:05:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300459,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T18:55:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T17:05:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T18:55:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HZR",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 41,
//                    "bicycle": 0,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "c8DRYq2C5HJup2suhzsCSe",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300078,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T04:05:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300091,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T05:50:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T04:05:00+00:00",
//                            "actual": "2025-09-02T04:05:10+00:00",
//                            "estimated": "2025-09-02T04:05:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T05:50:00+00:00",
//                            "actual": "2025-09-02T05:49:08+00:00",
//                            "estimated": "2025-09-02T05:49:04+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HZF",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 42,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "V2me6fqz4eg6fLDjvhdM2a",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299164,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T14:31:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299163,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T16:34:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T14:35:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T16:34:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HZM",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 52,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "7fAHfr4Py9j55E5pu4s9ae",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299272,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T18:33:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299271,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T20:20:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T18:35:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T20:20:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HXX",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 50,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "DGxWNuy9NrDKviHjRyXKYc",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2299245,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T17:33:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2299244,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T19:23:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T17:35:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T19:23:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HYY",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 18,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "E4995UFyAiGzkh3FiqefHR",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2298948,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T05:28:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2298947,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T07:32:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T05:30:00+00:00",
//                            "actual": "2025-09-02T05:30:17+00:00",
//                            "estimated": "2025-09-02T05:30:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T07:32:00+00:00",
//                            "actual": "2025-09-02T07:46:47+00:00",
//                            "estimated": "2025-09-02T07:46:37+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HYU",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 47,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "HN9zjdeJCjXrHhq9f5umpr",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300277,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T15:05:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300290,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T17:07:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T15:05:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T17:07:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG24 UHL",
//                            "vehicle_type": "coach",
//                            "colour": "Black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            },
//            {
//                "availability": {
//                    "seat": 52,
//                    "bicycle": 2,
//                    "wheelchair": 1
//                },
//                "prices": {
//                    "adult": 920,
//                    "child": 460,
//                    "young_child": 0,
//                    "concession": 0,
//                    "seat": 0,
//                    "wheelchair": 0,
//                    "bicycle": 0
//                },
//                "legs": [
//                    {
//                        "type": "scheduled_transit",
//                        "trip_uid": "H47y9dzvEsYA2rp2UmmCUH",
//                        "adds_capacity_for_trip_uid": null,
//                        "origin": {
//                            "id": 218,
//                            "atco_code": "6400LL99",
//                            "detailed_name": "Slessor Gardens",
//                            "lat": 56.459319,
//                            "lon": -2.966036,
//                            "name": "Dundee Slessor Gardens",
//                            "region_name": "Dundee",
//                            "type": "STOP_POINT",
//                            "code": "DUN",
//                            "code_detail": "Slessor Gardens",
//                            "timezone": "Europe/London",
//                            "heading": 135,
//                            "zone": [
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                },
//                                {
//                                    "longitude": -2.96554414986868,
//                                    "latitude": 56.459116641801984
//                                },
//                                {
//                                    "longitude": -2.965733748522858,
//                                    "latitude": 56.45900595021118
//                                },
//                                {
//                                    "longitude": -2.966491901718304,
//                                    "latitude": 56.45942485291969
//                                },
//                                {
//                                    "longitude": -2.966276800467473,
//                                    "latitude": 56.459542218608334
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 13,
//                            "location_time_id": 2300361,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T20:05:00+00:00"
//                        },
//                        "destination": {
//                            "id": 175,
//                            "atco_code": "6200206490",
//                            "detailed_name": "George Street (Stop GL)",
//                            "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                            "lat": 55.95395,
//                            "lon": -3.19549,
//                            "name": "George Street (Stop GL)",
//                            "region_name": "Edinburgh",
//                            "type": "STOP_POINT",
//                            "code": "EDI",
//                            "code_detail": "George St (GL)",
//                            "timezone": "Europe/London",
//                            "heading": 75,
//                            "zone": [
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                },
//                                {
//                                    "longitude": -3.195819771310044,
//                                    "latitude": 55.95377939447384
//                                },
//                                {
//                                    "longitude": -3.195124451156351,
//                                    "latitude": 55.95389942984702
//                                },
//                                {
//                                    "longitude": -3.195210121329188,
//                                    "latitude": 55.95405031477016
//                                },
//                                {
//                                    "longitude": -3.19590088477814,
//                                    "latitude": 55.95393198830283
//                                }
//                            ],
//                            "has_future_activity": true,
//                            "area_id": 42,
//                            "location_time_id": 2300374,
//                            "booking_cut_off_mins": 0,
//                            "pre_booked_only": false,
//                            "skipped": false,
//                            "bookable": "2025-09-02T21:43:00+00:00"
//                        },
//                        "departure": {
//                            "scheduled": "2025-09-02T20:05:00+00:00"
//                        },
//                        "arrival": {
//                            "scheduled": "2025-09-02T21:43:00+00:00"
//                        },
//                        "description": {
//                            "brand": "Ember",
//                            "operator": "Ember",
//                            "destination_board": "E1",
//                            "number_plate": "SG25 HYM",
//                            "vehicle_type": "coach",
//                            "colour": "black",
//                            "amenities": {
//                                "has_wifi": true,
//                                "has_toilet": true
//                            },
//                            "is_electric": true
//                        },
//                        "trip_type": "public"
//                    }
//                ],
//                "bookable": true
//            }
//        ],
//        "min_card_transaction": 30
//    }
//}
////{
//    "tripJson": {
//        "route": [
//            {
//                "id": 2300150,
//                "departure": {
//                    "scheduled": "2025-09-02T10:00:00+00:00",
//                    "actual": "2025-09-02T10:01:06+00:00",
//                    "estimated": "2025-09-02T10:00:00+00:00"
//                },
//                "arrival": {
//                    "scheduled": "2025-09-02T10:00:00+00:00",
//                    "actual": "2025-09-02T09:54:31+00:00",
//                    "estimated": "2025-09-02T10:00:00+00:00"
//                },
//                "location": {
//                    "id": 218,
//                    "type": "STOP_POINT",
//                    "name": "Dundee Slessor Gardens",
//                    "region_name": "Dundee",
//                    "code": "DUN",
//                    "code_detail": "Slessor Gardens",
//                    "detailed_name": "Slessor Gardens",
//                    "lon": -2.966036,
//                    "lat": 56.459319,
//                    "atco_code": "6400LL99",
//                    "has_future_activity": true,
//                    "timezone": "Europe/London",
//                    "zone": [
//                        {
//                            "latitude": 56.459542218608334,
//                            "longitude": -2.966276800467473
//                        },
//                        {
//                            "latitude": 56.459116641801984,
//                            "longitude": -2.96554414986868
//                        },
//                        {
//                            "latitude": 56.45900595021118,
//                            "longitude": -2.965733748522858
//                        },
//                        {
//                            "latitude": 56.45942485291969,
//                            "longitude": -2.9664919017183045
//                        },
//                        {
//                            "latitude": 56.459542218608334,
//                            "longitude": -2.966276800467473
//                        }
//                    ],
//                    "heading": 135,
//                    "area_id": 13
//                },
//                "allow_boarding": true,
//                "allow_drop_off": false,
//                "booking_cut_off_mins": 0,
//                "pre_booked_only": false,
//                "skipped": false
//            },
//            {
//                "id": 2300151,
//                "departure": {
//                    "scheduled": "2025-09-02T10:09:00+00:00",
//                    "estimated": "2025-09-02T10:09:00+00:00"
//                },
//                "arrival": {
//                    "scheduled": "2025-09-02T10:09:00+00:00",
//                    "estimated": "2025-09-02T10:08:06+00:00"
//                },
//                "location": {
//                    "id": 2,
//                    "type": "STOP_POINT",
//                    "name": "Dundee West",
//                    "region_name": "Dundee West",
//                    "code": "DUN",
//                    "code_detail": "Dundee West",
//                    "detailed_name": "Apollo Way",
//                    "lon": -3.05468,
//                    "lat": 56.462677,
//                    "google_place_id": "ChIJE2gJVwlDhkgRBp7tM4HaqS0",
//                    "atco_code": "6400L00019",
//                    "has_future_activity": true,
//                    "timezone": "Europe/London",
//                    "zone": [
//                        {
//                            "latitude": 56.46256507145948,
//                            "longitude": -3.0550262330871196
//                        },
//                        {
//                            "latitude": 56.462403053205456,
//                            "longitude": -3.0547294020652775
//                        },
//                        {
//                            "latitude": 56.46270436715984,
//                            "longitude": -3.0541500449180607
//                        },
//                        {
//                            "latitude": 56.462859468797895,
//                            "longitude": -3.054468333612022
//                        },
//                        {
//                            "latitude": 56.46256507145948,
//                            "longitude": -3.0550262330871196
//                        }
//                    ],
//                    "heading": 45,
//                    "area_id": 14
//                },
//                "allow_boarding": true,
//                "allow_drop_off": true,
//                "booking_cut_off_mins": 10,
//                "pre_booked_only": true,
//                "skipped": true
//            },
//            {
//                "id": 2300152,
//                "departure": {
//                    "scheduled": "2025-09-02T10:15:00+00:00",
//                    "estimated": "2025-09-02T10:15:00+00:00"
//                },
//                "arrival": {
//                    "scheduled": "2025-09-02T10:15:00+00:00",
//                    "estimated": "2025-09-02T10:13:06+00:00"
//                },
//                "location": {
//                    "id": 33,
//                    "type": "STOP_POINT",
//                    "name": "Longforgan",
//                    "region_name": "Longforgan",
//                    "code": "LFG",
//                    "code_detail": "Longforgan",
//                    "detailed_name": "Westbound Slip Road",
//                    "direction": "WESTBOUND",
//                    "lon": -3.1286,
//                    "lat": 56.45718,
//                    "google_place_id": "ChIJFT_RJGdBhkgRYxkAqkW68GY",
//                    "atco_code": "64804203",
//                    "has_future_activity": true,
//                    "timezone": "Europe/London",
//                    "zone": [
//                        {
//                            "latitude": 56.457394470261235,
//                            "longitude": -3.1286752219602927
//                        },
//                        {
//                            "latitude": 56.45716919447582,
//                            "longitude": -3.128925561904907
//                        },
//                        {
//                            "latitude": 56.456884633679266,
//                            "longitude": -3.1281888482772047
//                        },
//                        {
//                            "latitude": 56.457157337818515,
//                            "longitude": -3.1278240678511793
//                        },
//                        {
//                            "latitude": 56.457394470261235,
//                            "longitude": -3.1286752219602927
//                        }
//                    ],
//                    "heading": 270,
//                    "area_id": 47
//                },
//                "allow_boarding": true,
//                "allow_drop_off": true,
//                "booking_cut_off_mins": 10,
//                "pre_booked_only": true,
//                "skipped": true
//            },
//            {
//                "id": 2300153,
//                "departure": {
//                    "scheduled": "2025-09-02T10:17:00+00:00",
//                    "estimated": "2025-09-02T10:17:00+00:00"
//                },
//                "arrival": {
//                    "scheduled": "2025-09-02T10:17:00+00:00",
//                    "estimated": "2025-09-02T10:15:10+00:00"
//                },
//                "location": {
//                    "id": 3,
//                    "type": "STOP_POINT",
//                    "name": "Inchture",
//                    "region_name": "Inchture",
//                    "code": "INC",
//                    "code_detail": "Inchture",
//                    "detailed_name": "Road End (Westbound)",
//                    "direction": "WESTBOUND",
//                    "lon": -3.170071,
//                    "lat": 56.447108,
//                    "google_place_id": "ChIJa-OPGCRBhkgRqINJzMi0mc0",
//                    "atco_code": "64800191",
//                    "has_future_activity": true,
//                    "timezone": "Europe/London",
//                    "zone": [
//                        {
//                            "latitude": 56.44792778370844,
//                            "longitude": -3.169394731085048
//                        },
//                        {
//                            "latitude": 56.447749890193236,
//                            "longitude": -3.1689512727461984
//                        },
//                        {
//                            "latitude": 56.445903701655475,
//                            "longitude": -3.171147107641445
//                        },
//                        {
//                            "latitude": 56.44614090434802,
//                            "longitude": -3.171762228012084
//                        },
//                        {
//                            "latitude": 56.44792778370844,
//                            "longitude": -3.169394731085048
//                        }
//                    ],
//                    "heading": 225,
//                    "area_id": 15
//                },
//                "allow_boarding": true,
//                "allow_drop_off": true,
//                "booking_cut_off_mins": 10,
//                "pre_booked_only": true,
//                "skipped": true
//            },
//            {
//                "id": 2300154,
//                "departure": {
//                    "scheduled": "2025-09-02T10:21:00+00:00",
//                    "estimated": "2025-09-02T10:21:00+00:00"
//                },
//                "arrival": {
//                    "scheduled": "2025-09-02T10:21:00+00:00",
//                    "estimated": "2025-09-02T10:19:06+00:00"
//                },
//                "location": {
//                    "id": 219,
//                    "type": "STOP_POINT",
//                    "name": "Horn Milk Bar (Inchmichael)",
//                    "region_name": "Horn Milk Bar",
//                    "code": "HMB",
//                    "code_detail": "Horn Milk Bar",
//                    "detailed_name": "A90 Westbound (Near Inchmichael)",
//                    "lon": -3.22355,
//                    "lat": 56.42313,
//                    "google_place_id": "ChIJl2G8ClFHhkgRyROv47gKkJI",
//                    "atco_code": "64802223",
//                    "has_future_activity": true,
//                    "timezone": "Europe/London",
//                    "zone": [
//                        {
//                            "latitude": 56.423240519394184,
//                            "longitude": -3.2235198969103673
//                        },
//                        {
//                            "latitude": 56.423169690344636,
//                            "longitude": -3.2233826802107806
//                        },
//                        {
//                            "latitude": 56.423033091090865,
//                            "longitude": -3.223620522490064
//                        },
//                        {
//                            "latitude": 56.423098861163176,
//                            "longitude": -3.2237348697397197
//                        },
//                        {
//                            "latitude": 56.423240519394184,
//                            "longitude": -3.2235198969103673
//                        }
//                    ],
//                    "heading": 222,
//                    "area_id": 221
//                },
//                "allow_boarding": true,
//                "allow_drop_off": true,
//                "booking_cut_off_mins": 10,
//                "pre_booked_only": true,
//                "skipped": true
//            },
//            {
//                "id": 2300155,
//                "departure": {
//                    "scheduled": "2025-09-02T10:27:00+00:00",
//                    "actual": "2025-09-02T10:28:50+00:00",
//                    "estimated": "2025-09-02T10:27:57+00:00"
//                },
//                "arrival": {
//                    "scheduled": "2025-09-02T10:27:00+00:00",
//                    "actual": "2025-09-02T10:27:45+00:00",
//                    "estimated": "2025-09-02T10:27:57+00:00"
//                },
//                "location": {
//                    "id": 31,
//                    "type": "STOP_POINT",
//                    "name": "St Madoes",
//                    "region_name": "St Madoes",
//                    "code": "STM",
//                    "code_detail": "St Madoes",
//                    "detailed_name": "St Madoes Green",
//                    "direction": "WESTBOUND",
//                    "lon": -3.30666,
//                    "lat": 56.37536,
//                    "google_place_id": "ChIJ-7_7UqQ5hkgR54w_LXj3974",
//                    "atco_code": "64801650",
//                    "has_future_activity": true,
//                    "timezone": "Europe/London",
//                    "zone": [
//                        {
//                            "latitude": 56.37553553466398,
//                            "longitude": -3.3067435026168814
//                        },
//                        {
//                            "latitude": 56.37534437027729,
//                            "longitude": -3.3060486349879716
//                        },
//                        {
//                            "latitude": 56.37478591097687,
//                            "longitude": -3.3060724763138927
//                        },
//                        {
//                            "latitude": 56.37523451962018,
//                            "longitude": -3.3070760965347286
//                        },
//                        {
//                            "latitude": 56.37553553466398,
//                            "longitude": -3.3067435026168814
//                        }
//                    ],
//                    "heading": 315,
//                    "area_id": 46
//                },
//                "allow_boarding": true,
//                "allow_drop_off": true,
//                "booking_cut_off_mins": 10,
//                "pre_booked_only": true,
//                "skipped": false
//            },
//            {
//                "id": 2300156,
//                "departure": {
//                    "scheduled": "2025-09-02T10:33:00+00:00",
//                    "estimated": "2025-09-02T10:33:00+00:00"
//                },
//                "arrival": {
//                    "scheduled": "2025-09-02T10:33:00+00:00",
//                    "estimated": "2025-09-02T10:32:50+00:00"
//                },
//                "location": {
//                    "id": 5,
//                    "type": "STOP_POINT",
//                    "name": "Walnut Grove",
//                    "region_name": "Walnut Grove",
//                    "code": "PTH",
//                    "code_detail": "Walnut Grove",
//                    "detailed_name": "West Road End (for Perth)",
//                    "lon": -3.404654,
//                    "lat": 56.382796,
//                    "google_place_id": "ChIJHTQF-6o7hkgRW4XWXa1kbdc",
//                    "atco_code": "64801647",
//                    "has_future_activity": true,
//                    "timezone": "Europe/London",
//                    "zone": [
//                        {
//                            "latitude": 56.38307990585553,
//                            "longitude": -3.4051787853240962
//                        },
//                        {
//                            "latitude": 56.38290566874258,
//                            "longitude": -3.404105901718139
//                        },
//                        {
//                            "latitude": 56.381618665708096,
//                            "longitude": -3.4047281742095943
//                        },
//                        {
//                            "latitude": 56.381828549392274,
//                            "longitude": -3.405622243662947
//                        },
//                        {
//                            "latitude": 56.38307990585553,
//                            "longitude": -3.4051787853240962
//                        }
//                    ],
//                    "heading": 180,
//                    "area_id": 16
//                },
//                "allow_boarding": true,
//                "allow_drop_off": true,
//                "booking_cut_off_mins": 10,
//                "pre_booked_only": true,
//                "skipped": true
//            },
//            {
//                "id": 2300157,
//                "departure": {
//                    "scheduled": "2025-09-02T10:39:00+00:00",
//                    "actual": "2025-09-02T10:41:05+00:00",
//                    "estimated": "2025-09-02T10:39:00+00:00"
//                },
//                "arrival": {
//                    "scheduled": "2025-09-02T10:39:00+00:00",
//                    "actual": "2025-09-02T10:38:53+00:00",
//                    "estimated": "2025-09-02T10:38:45+00:00"
//                },
//                "location": {
//                    "id": 48,
//                    "type": "STOP_POINT",
//                    "name": "Bridge of Earn",
//                    "region_name": "Bridge of Earn",
//                    "code": "BOE",
//                    "code_detail": "Bridge of Earn",
//                    "detailed_name": "Old Edinburgh Road",
//                    "lon": -3.402653,
//                    "lat": 56.344795,
//                    "google_place_id": "ChIJK_IWfX06hkgRdYmM9l9rUBU",
//                    "atco_code": "64802696",
//                    "has_future_activity": true,
//                    "timezone": "Europe/London",
//                    "zone": [
//                        {
//                            "latitude": 56.34488518734358,
//                            "longitude": -3.4022462363645896
//                        },
//                        {
//                            "latitude": 56.344655280875656,
//                            "longitude": -3.40271830515121
//                        },
//                        {
//                            "latitude": 56.34488915135803,
//                            "longitude": -3.403126001248893
//                        },
//                        {
//                            "latitude": 56.345130948022884,
//                            "longitude": -3.402696847479091
//                        },
//                        {
//                            "latitude": 56.34488518734358,
//                            "longitude": -3.4022462363645896
//                        }
//                    ],
//                    "heading": 135,
//                    "area_id": 54
//                },
//                "allow_boarding": true,
//                "allow_drop_off": true,
//                "booking_cut_off_mins": 10,
//                "pre_booked_only": true,
//                "skipped": false
//            },
//            {
//                "id": 2300158,
//                "departure": {
//                    "scheduled": "2025-09-02T10:56:00+00:00",
//                    "actual": "2025-09-02T10:58:09+00:00",
//                    "estimated": "2025-09-02T10:56:08+00:00"
//                },
//                "arrival": {
//                    "scheduled": "2025-09-02T10:56:00+00:00",
//                    "actual": "2025-09-02T10:56:11+00:00",
//                    "estimated": "2025-09-02T10:56:08+00:00"
//                },
//                "location": {
//                    "id": 6,
//                    "type": "STOP_POINT",
//                    "name": "Kinross P&R",
//                    "region_name": "Kinross",
//                    "code": "KIR",
//                    "code_detail": "Kinross P&R",
//                    "detailed_name": "Park & Ride",
//                    "lon": -3.433365,
//                    "lat": 56.206317,
//                    "google_place_id": "ChIJi2G0f3syhkgRpiaZ20yWrj0",
//                    "atco_code": "64804323",
//                    "has_future_activity": true,
//                    "timezone": "Europe/London",
//                    "zone": [
//                        {
//                            "latitude": 56.20657269850862,
//                            "longitude": -3.433522582054137
//                        },
//                        {
//                            "latitude": 56.20603563039676,
//                            "longitude": -3.433393836021422
//                        },
//                        {
//                            "latitude": 56.20609232127476,
//                            "longitude": -3.432476520538329
//                        },
//                        {
//                            "latitude": 56.206718899081004,
//                            "longitude": -3.4326803684234615
//                        },
//                        {
//                            "latitude": 56.206638339650894,
//                            "longitude": -3.4335654973983756
//                        },
//                        {
//                            "latitude": 56.20657269850862,
//                            "longitude": -3.433522582054137
//                        }
//                    ],
//                    "heading": 90,
//                    "area_id": 17
//                },
//                "allow_boarding": true,
//                "allow_drop_off": true,
//                "booking_cut_off_mins": 10,
//                "pre_booked_only": true,
//                "skipped": false
//            },
//            {
//                "id": 2300159,
//                "departure": {
//                    "scheduled": "2025-09-02T11:14:00+00:00",
//                    "estimated": "2025-09-02T11:14:00+00:00"
//                },
//                "arrival": {
//                    "scheduled": "2025-09-02T11:14:00+00:00",
//                    "estimated": "2025-09-02T11:13:27+00:00"
//                },
//                "location": {
//                    "id": 7,
//                    "type": "STOP_POINT",
//                    "name": "Rosyth",
//                    "region_name": "Rosyth",
//                    "code": "ROS",
//                    "code_detail": "Rosyth",
//                    "detailed_name": "St John's & St Columba's Church",
//                    "lon": -3.415373,
//                    "lat": 56.036069,
//                    "google_place_id": "ChIJF1mMfCbOh0gRv2ekZY5TgDU",
//                    "atco_code": "6500D0254",
//                    "has_future_activity": true,
//                    "timezone": "Europe/London",
//                    "zone": [
//                        {
//                            "latitude": 56.03619930007082,
//                            "longitude": -3.4157851338386536
//                        },
//                        {
//                            "latitude": 56.036094407234714,
//                            "longitude": -3.4148302674293514
//                        },
//                        {
//                            "latitude": 56.035880624731846,
//                            "longitude": -3.414908945505886
//                        },
//                        {
//                            "latitude": 56.03599351007766,
//                            "longitude": -3.41587632894516
//                        },
//                        {
//                            "latitude": 56.03619930007082,
//                            "longitude": -3.4157851338386536
//                        }
//                    ],
//                    "heading": 90,
//                    "area_id": 18
//                },
//                "allow_boarding": true,
//                "allow_drop_off": true,
//                "booking_cut_off_mins": 10,
//                "pre_booked_only": true,
//                "skipped": false
//            },
//            {
//                "id": 2300160,
//                "departure": {
//                    "scheduled": "2025-09-02T11:32:00+00:00",
//                    "estimated": "2025-09-02T11:32:00+00:00"
//                },
//                "arrival": {
//                    "scheduled": "2025-09-02T11:32:00+00:00",
//                    "estimated": "2025-09-02T11:30:00+00:00"
//                },
//                "location": {
//                    "id": 25,
//                    "type": "STOP_POINT",
//                    "name": "Ingliston P&R",
//                    "region_name": "Edinburgh",
//                    "code": "EDI",
//                    "code_detail": "Ingliston P&R",
//                    "detailed_name": "Ingliston P&R (Bus Stop)",
//                    "local_name": "the bus stop",
//                    "lon": -3.35609,
//                    "lat": 55.93907,
//                    "google_place_id": "ChIJiyELPgHFh0gRNQNkuGaZJ3g",
//                    "atco_code": "6200247604",
//                    "has_future_activity": true,
//                    "timezone": "Europe/London",
//                    "zone": [
//                        {
//                            "latitude": 55.93912014254329,
//                            "longitude": -3.356469869613648
//                        },
//                        {
//                            "latitude": 55.93924833303975,
//                            "longitude": -3.3559763431549077
//                        },
//                        {
//                            "latitude": 55.93839906325638,
//                            "longitude": -3.355354070663452
//                        },
//                        {
//                            "latitude": 55.93827087013271,
//                            "longitude": -3.3558976645872463
//                        },
//                        {
//                            "latitude": 55.93912014254329,
//                            "longitude": -3.356469869613648
//                        }
//                    ],
//                    "heading": 315,
//                    "area_id": 45
//                },
//                "allow_boarding": true,
//                "allow_drop_off": true,
//                "booking_cut_off_mins": 10,
//                "pre_booked_only": true,
//                "skipped": false
//            },
//            {
//                "id": 2300161,
//                "departure": {
//                    "scheduled": "2025-09-02T11:41:00+00:00",
//                    "estimated": "2025-09-02T11:41:00+00:00"
//                },
//                "arrival": {
//                    "scheduled": "2025-09-02T11:41:00+00:00",
//                    "estimated": "2025-09-02T11:41:00+00:00"
//                },
//                "location": {
//                    "id": 222,
//                    "type": "STOP_POINT",
//                    "name": "Edinburgh Corstorphine",
//                    "region_name": "Edinburgh",
//                    "code": "EDI",
//                    "code_detail": "Corstorphine",
//                    "detailed_name": "Corstorphine (Eastbound)",
//                    "lon": -3.287015,
//                    "lat": 55.943189,
//                    "google_place_id": "ChIJI_ZdRHnGh0gRTfsgtlM3Jw0",
//                    "atco_code": "6200202750",
//                    "has_future_activity": true,
//                    "timezone": "Europe/London",
//                    "zone": [
//                        {
//                            "latitude": 55.943283005523426,
//                            "longitude": -3.2872936537585815
//                        },
//                        {
//                            "latitude": 55.94303501054907,
//                            "longitude": -3.287360149934841
//                        },
//                        {
//                            "latitude": 55.942983509796136,
//                            "longitude": -3.2867333881006857
//                        },
//                        {
//                            "latitude": 55.94324972833482,
//                            "longitude": -3.286659817863267
//                        },
//                        {
//                            "latitude": 55.943283005523426,
//                            "longitude": -3.2872936537585815
//                        }
//                    ],
//                    "heading": 100,
//                    "area_id": 226
//                },
//                "allow_boarding": true,
//                "allow_drop_off": true,
//                "booking_cut_off_mins": 10,
//                "pre_booked_only": true,
//                "skipped": false
//            },
//            {
//                "id": 2300162,
//                "departure": {
//                    "scheduled": "2025-09-02T11:51:00+00:00",
//                    "estimated": "2025-09-02T11:51:00+00:00"
//                },
//                "arrival": {
//                    "scheduled": "2025-09-02T11:51:00+00:00",
//                    "estimated": "2025-09-02T11:51:00+00:00"
//                },
//                "location": {
//                    "id": 28,
//                    "type": "STOP_POINT",
//                    "name": "Haymarket",
//                    "region_name": "Edinburgh",
//                    "code": "EDI",
//                    "code_detail": "Haymarket (HB)",
//                    "detailed_name": "Haymarket (Stop HB)",
//                    "direction": "EASTBOUND",
//                    "lon": -3.218346,
//                    "lat": 55.945944,
//                    "google_place_id": "ChIJtdKcu6XHh0gRj31N-EL5iIg",
//                    "atco_code": "6200202930",
//                    "has_future_activity": true,
//                    "timezone": "Europe/London",
//                    "zone": [
//                        {
//                            "latitude": 55.945996759992546,
//                            "longitude": -3.217969536672172
//                        },
//                        {
//                            "latitude": 55.94581452078557,
//                            "longitude": -3.217969536672172
//                        },
//                        {
//                            "latitude": 55.94583654976943,
//                            "longitude": -3.219063877950248
//                        },
//                        {
//                            "latitude": 55.94603681237606,
//                            "longitude": -3.219060301562423
//                        },
//                        {
//                            "latitude": 55.945996759992546,
//                            "longitude": -3.217969536672172
//                        }
//                    ],
//                    "heading": 90,
//                    "area_id": 43
//                },
//                "allow_boarding": false,
//                "allow_drop_off": true,
//                "booking_cut_off_mins": 0,
//                "pre_booked_only": false,
//                "skipped": false
//            },
//            {
//                "id": 2300163,
//                "departure": {
//                    "scheduled": "2025-09-02T12:01:00+00:00",
//                    "estimated": "2025-09-02T12:01:00+00:00"
//                },
//                "arrival": {
//                    "scheduled": "2025-09-02T12:01:00+00:00",
//                    "estimated": "2025-09-02T12:01:00+00:00"
//                },
//                "location": {
//                    "id": 175,
//                    "type": "STOP_POINT",
//                    "name": "George Street (Stop GL)",
//                    "region_name": "Edinburgh",
//                    "code": "EDI",
//                    "code_detail": "George St (GL)",
//                    "detailed_name": "George Street (Stop GL)",
//                    "lon": -3.19549,
//                    "lat": 55.95395,
//                    "google_place_id": "ChIJ1QuappHHh0gRScSpuwtgb-s",
//                    "atco_code": "6200206490",
//                    "has_future_activity": true,
//                    "timezone": "Europe/London",
//                    "zone": [
//                        {
//                            "latitude": 55.95393198830283,
//                            "longitude": -3.19590088477814
//                        },
//                        {
//                            "latitude": 55.95377939447384,
//                            "longitude": -3.195819771310044
//                        },
//                        {
//                            "latitude": 55.95389942984702,
//                            "longitude": -3.195124451156351
//                        },
//                        {
//                            "latitude": 55.95405031477016,
//                            "longitude": -3.195210121329188
//                        },
//                        {
//                            "latitude": 55.95393198830283,
//                            "longitude": -3.19590088477814
//                        }
//                    ],
//                    "heading": 75,
//                    "area_id": 42
//                },
//                "allow_boarding": false,
//                "allow_drop_off": true,
//                "booking_cut_off_mins": 0,
//                "pre_booked_only": false,
//                "skipped": false
//            }
//        ],
//        "vehicle": {
//            "seat": 53,
//            "wheelchair": 1,
//            "bicycle": 2,
//            "id": 63,
//            "plate_number": "SG25 HYB",
//            "name": "Yutong Coach (SG25 HYB)",
//            "has_wifi": true,
//            "has_toilet": true,
//            "type": "coach",
//            "brand": "Ember",
//            "colour": "black",
//            "is_backup_vehicle": false,
//            "owner_id": 4,
//            "gps": {
//                "last_updated": "2025-09-02T12:07:27.509000+01:00",
//                "longitude": -3.3926866,
//                "latitude": 56.0985966,
//                "heading": 213
//            },
//            "secondary_gps": {
//                "last_updated": "2025-09-02T11:07:23+00:00",
//                "longitude": -3.3921497089303445,
//                "latitude": 56.0991965849671,
//                "heading": 216.05638122558594
//            }
//        },
//        "description": {
//            "route_number": "E1",
//            "pattern_id": 37148,
//            "calendar_date": "2025-09-02",
//            "type": "public",
//            "is_cancelled": false,
//            "route_id": 1
//        }
//    }
//}
