import { MdCarpenter, MdPlumbing, MdCleaningServices } from 'react-icons/md'
import { FaBabyCarriage } from 'react-icons/fa'
import { GiSofa, GiHospitalCross, GiAutoRepair } from 'react-icons/gi'
import { TbBugOff, TbPlug } from 'react-icons/tb'
import { SiAdguard } from 'react-icons/si'
import { TfiBlackboard } from 'react-icons/tfi'
import { GoPackage } from 'react-icons/go'
import { SlUserFemale } from 'react-icons/sl'
import { BiMale } from 'react-icons/bi'
export const locationMap = {
    'Indore': {
        "Sarafa": 0,
        "Vijay Nagar": 0,
        "South Tukoganj": 0,
        "Bhawar Kuan": 0,
        "Old Palasia": 0,
        "New Palasia": 0,
    },
    "Pune": {
        "Wanowrie": 0,
        "Koregaon Park": 0,
        "Hadapsar": 0,
        "Camp": 0,
        "Warje": 0,
        "Pimple Saudagar": 0,
        "Kothrud": 0,
        "Vishrantwadi": 0,
        "Nanded City": 0,
        "Sangvi": 0,
        "Bibwewadi": 0,
        "Wakad": 0,
        "Kondhwa": 0,
        "Swargate": 0,
        "Nigdi": 0,
        "Bavdhan": 0,
        "Bhosari": 0,
        "Sinhgad Road": 0,
        "Wagholi": 0,
        "Narhe": 0,
        "Hinjewadi": 0,
        "Bopodi": 0,
        "PCMC": 0,
        "Dhankawadi": 0,
        "Viman Nagar": 0,
        "Aundh": 0,
        "Kalyani Nagar": 0,
        "Kharadi": 0,
        "Shivaji Nagar": 0,
        "Hinjewadi Phase-3": 0,
        "Baner": 0,
        "Magarpatta": 0,
    },
    "Bangalore": {
        "Yeshwanthpur": 0,
        "Geddalahalli": 0,
        "Basavanagudi": 0,
        "Koramangala": 0,
        "JP Nagar": 0,
        "Mahadevpura": 0,
        "HSR": 0,
        // "Arekere": 0,
        // "Indiranagar": 0,
        // "Banashankari": 0,
        // "Whitefield": 0,
        // "Nagavara & Hennur ": 0,
        // "Kammanahalli/Kalyan Nagar": 0,
        // "Kumaraswamy Layout & Uttarahalli": 0,
        // "BTM": 0,
        // "Battarahalli": 0,
        // "Banaswadi": 0,
        // "Basaveshwaranagar": 0,
        // "Bellandur/Sarjapur": 0,
        // "Frazer Town": 0,
        // "Sanjay Nagar, New BEL Road": 0,
        // "Yelahanka": 0,
        // "Majestic": 0,
        "Kanakapura Road": 0,
        "R.T. Nagar": 0,
        "Kadugodi": 0,
        "Marathahalli": 0,
        "Rajarajeshwari Nagar": 0,
        "CV Raman Nagar": 0,
        "Electronic City": 0,
        "Rajajinagar": 0,
        "Kudlu_gate": 0,
        "Kadubeesanahalli": 0,
        "Shantinagar": 0,
        "Jayanagar": 0,
        "Central Bangalore": 0,
        "Wilson Garden": 0,
    }
}

export const skillMap = {
    'Baby sitting': {
        icon: <FaBabyCarriage size={'40'} />,
        array: {
            "Baby sitting and Nanny ": 0,
            "Prepare healty meals": 0,
            "light housework": 0,

        }
    },
    "Plumbing": {
        icon: <MdPlumbing size={'40'} />,
        array: {
            "Basin & sink": 0,
            "Grouting": 0,
            "Drainage pipes": 0,
            "Toilet": 0,
            "Water pipe connections": 0,
            "Tab And Mixer": 0,
            "Water Tank": 0,
            "Moter": 0,
            "Water Filter": 0,
            "All Services": 0,
        }
    },
    "Carpenters": {
        icon: <MdCarpenter size={'40'} />,
        array: {
            "Balcony": 0,
            "Bed": 0,
            "Door": 0,
            "Cupboard & drawer": 0,
            "Water pipe connections": 0,
            "Furniture assembly": 0,
            "Drill & hang": 0,
            "Furniture repair": 0,
            "TV": 0,
            "Window & curtain": 0,
            "All Services": 0,
        }
    },
    "Bathroom and Kitchen Cleaning": {
        icon: <MdCleaningServices size={'40'} />,
        array: {
            "Bathroom cleaning": 0,
            "Kitchen cleaning": 0,
            "Mini services": 0,
            "All Services": 0,
        }
    },
    "Full Home Cleaning": {
        icon: <MdCleaningServices size={'40'} />,
        array: {
            "Apartment Deep Cleaning": 0,
            "Villa Deep Cleaning": 0,
            "Empty Home Deep Cleaning": 0,
            "All Services": 0,
        }
    },
    "Sofa & Carpet Cleaning": {
        icon: <GiSofa size={'40'} />,
        array: {
            "Sofa Cleaning": 0,
            "Carpet Cleaning": 0,
            "Mini Services": 0,
            "All Services": 0,
        }
    },
    "Disinfection Services": {
        icon: <TbBugOff size={'40'} />,
        array: {
            "All Disinfection Services": 0,
        }
    },
    "House Keeping": {
        icon: <SiAdguard size={'40'} />,
        array: {
            "Cleaner or Maid": 0,
            "Cook": 0,
            "Live in HouseKeeper": 0,
            "Live out HouseKeeper": 0,
        }
    },
    "Tutoring": {
        icon: <TfiBlackboard size={'40'} />,
        array: {
            "Tutoring": 0,
            "exam prep": 0,
        }
    },
    "Electrical Services": {
        icon: <TbPlug size={'40'} />,
        array: {
            "Diwali Lights": 0,
            "Switch & socket": 0,
            "Fan": 0,
            "Light": 0,
            "MCB & fuse": 0,
            "Inverter & stabilizer": 0,
            "Appliance": 0,
            "Wiring": 0,
            "All Serice": 0
        }
    },
    "Moving and delivery": {
        icon: <GoPackage size={'40'} />,
        array: {
            "House Shifting": 0,
            "packing and unpacking": 0,
            "Transporting": 0
        }
    },
    "Salon for Women": {
        icon: <SlUserFemale size={'40'} />,
        array: {
            "Threading and facewax": 0,
            "Bleach and detan": 0,
            "Cut and Style": 0,
            "Blowdry and styling": 0,
            "spa and massage": 0,
            "Anti frizz and keratin": 0,
            "Maintenance Color": 0,
            "Fashion Color": 0,
        }
    },
    "Salon for Men": {
        icon: <BiMale size={'40'} />,
        array: {
            "Haircut for Men and Kids": 0,
            "Haircolor": 0,
            "Shave/Beard Grooming": 0,
            "Detan and facials": 0
        }
    },
    "Message and Therapies": {
        icon: <GiHospitalCross size={'40'} />,
        array: {
            "Head Massage": 0,
            "Neck and Shoulder Massage": 0,
            "Hair strengthening Head Massage": 0,
            "Kids Head Massage": 0,
            "Top to Toe therapy": 0,
            "Pain Relief Therapy": 0,
        }
    },
    "Application Repair and service": {
        icon: <GiAutoRepair size={'40'} />,
        array: {
            "Repair": 0,
            "installation and uninstallation": 0,
            "Service CheckUp": 0,
        }
    }
}