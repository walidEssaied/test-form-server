import { getRepository } from "typeorm";
import { Sector } from "../../entity/Sector";

export async function seedSectorsService() {
  const _sectorsData = [
    {
      id: 1,
      name: "Manufacturing",
      parentId: null,
    },
    {
      id: 2,
      name: "Food and Beverage",
      parentId: 1,
    },
    {
      id: 3,
      name: "Bakery & confectionery products",
      parentId: 2,
    },
    {
      id: 4,
      name: "Beverages",
      parentId: 2,
    },
    {
      id: 5,
      name: "Fish & fish products",
      parentId: 2,
    },
    {
      id: 6,
      name: "Meat & meat products",
      parentId: 2,
    },
    {
      id: 7,
      name: "Milk & dairy products",
      parentId: 2,
    },
    {
      id: 8,
      name: "Other",
      parentId: 2,
    },
    {
      id: 9,
      name: "Sweets & snack food",
      parentId: 2,
    },
    {
      id: 10,
      name: "Furniture",
      parentId: 1,
    },
    {
      id: 11,
      name: "Bathroom/sauna",
      parentId: 10,
    },
    {
      id: 12,
      name: "Bedroom",
      parentId: 10,
    },
    {
      id: 13,
      name: "Children’s room",
      parentId: 10,
    },
    {
      id: 14,
      name: "Kitchen",
      parentId: 10,
    },
    {
      id: 15,
      name: "Living room",
      parentId: 10,
    },
    {
      id: 16,
      name: "Office",
      parentId: 10,
    },
    {
      id: 17,
      name: "Other (Furniture)",
      parentId: 10,
    },
    {
      id: 18,
      name: "Outdoor",
      parentId: 10,
    },
    {
      id: 19,
      name: "Project furniture",
      parentId: 10,
    },
    {
      id: 20,
      name: "Machinery",
      parentId: 1,
    },
    {
      id: 21,
      name: "Machinery components",
      parentId: 20,
    },
    {
      id: 22,
      name: "Machinery equipment/tools",
      parentId: 20,
    },
    {
      id: 23,
      name: "Manufacture of machinery",
      parentId: 20,
    },
    {
      id: 24,
      name: "Maritime",
      parentId: 20,
    },
    {
      id: 25,
      name: "Metal structures",
      parentId: 20,
    },
    {
      id: 26,
      name: "Other",
      parentId: 20,
    },
    {
      id: 27,
      name: "Repair and maintenance service",
      parentId: 20,
    },
    {
      id: 28,
      name: "Metalworking",
      parentId: 1,
    },
    {
      id: 29,
      name: "Construction of metal structures",
      parentId: 28,
    },
    {
      id: 30,
      name: "Houses and buildings",
      parentId: 28,
    },
    {
      id: 31,
      name: "Metal products",
      parentId: 28,
    },
    {
      id: 32,
      name: "Metal works",
      parentId: 28,
    },
    {
      id: 33,
      name: "Plastic and Rubber",
      parentId: 1,
    },
    {
      id: 34,
      name: "Packaging",
      parentId: 33,
    },
    {
      id: 35,
      name: "Plastic goods",
      parentId: 33,
    },
    {
      id: 36,
      name: "Plastic processing technology",
      parentId: 33,
    },
    {
      id: 37,
      name: "Printing",
      parentId: 1,
    },
    {
      id: 38,
      name: "Advertising",
      parentId: 37,
    },
    {
      id: 39,
      name: "Book/Periodicals printing",
      parentId: 37,
    },
    {
      id: 40,
      name: "Labelling and packaging printing",
      parentId: 37,
    },
    {
      id: 41,
      name: "Textile and Clothing",
      parentId: 1,
    },
    {
      id: 42,
      name: "Clothing",
      parentId: 41,
    },
    {
      id: 43,
      name: "Textile",
      parentId: 41,
    },
    {
      id: 44,
      name: "Wood",
      parentId: 1,
    },
    {
      id: 45,
      name: "Other (Wood)",
      parentId: 44,
    },
    {
      id: 46,
      name: "Wooden building materials",
      parentId: 44,
    },
    {
      id: 47,
      name: "Wooden houses",
      parentId: 44,
    },
    {
      id: 48,
      name: "Other",
      parentId: null,
    },
    {
      id: 49,
      name: "Creative industries",
      parentId: 48,
    },
    {
      id: 50,
      name: "Energy technology",
      parentId: 48,
    },
    {
      id: 51,
      name: "Environment",
      parentId: 48,
    },
    {
      id: 52,
      name: "Service",
      parentId: null,
    },
    {
      id: 53,
      name: "Business services",
      parentId: 52,
    },
    {
      id: 54,
      name: "Engineering",
      parentId: 52,
    },
    {
      id: 55,
      name: "Information Technology and Telecommunications",
      parentId: 52,
    },
    {
      id: 59,
      name: "Data processing, Web portals, E-marketing",
      parentId: 55,
    },
    {
      id: 60,
      name: "Programming, Consultancy",
      parentId: 55,
    },
    {
      id: 61,
      name: "Software, Hardware",
      parentId: 55,
    },
    {
      id: 62,
      name: "Telecommunications",
      parentId: 55,
    },
    {
      id: 63,
      name: "Air",
      parentId: 58,
    },
    {
      id: 64,
      name: "Rail",
      parentId: 58,
    },
    {
      id: 65,
      name: "Road",
      parentId: 58,
    },
    {
      id: 66,
      name: "Water",
      parentId: 58,
    },
    {
      id: 56,
      name: "Tourism",
      parentId: 52,
    },
    {
      id: 57,
      name: "Translation services",
      parentId: 52,
    },
    {
      id: 58,
      name: "Transport and Logistics",
      parentId: 52,
    },
  ];

  const sectorRepository = getRepository(Sector);

  try {
    const existingSectors = await sectorRepository.find();

    if (existingSectors.length === 0) {
      const serctors = await sectorRepository.insert(_sectorsData);
      return 200;
    } else {
      return 409;
    }
  } catch (error) {
    console.error("Error seeding sectors:", error);
    return 500;
  }
}
