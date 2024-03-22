import Sidebar from "../sidebar/sidebar"
import Card from "./card"
import {useEffect, useState} from "react"
import ShimmerCard from "../Shimmer/Shimmer"
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid"

interface Item {
  image: string
  title: string
  price: number
  id: number
}

export default function Index() {
  const [open, setOpen] = useState(true)
  const [data, setData] = useState<Item[]>([])
  const [filteredData, setFilteredData] = useState<Item[]>([])
  const [filterOption, setFilterOption] = useState<string>("recommended")
  const [categoryFilter, setCategoryFilter] = useState<string>("men")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const jsonData: Item[] = await response.json()
        setData(jsonData)
        setFilteredData(jsonData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    filterData()
  }, [data, filterOption])

  const filterData = () => {
    let sortedData = [...data]
    switch (filterOption) {
      case "recommended":
        break
      case "priceHighToLow":
        sortedData.sort((a, b) => b.price - a.price)
        break
      case "priceLowToHigh":
        sortedData.sort((a, b) => a.price - b.price)
        break
      case "newest":
        sortedData.sort((a, b) => b.id - a.id)
        break
      default:
        break
    }
    setFilteredData(sortedData)
  }

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(event.target.value)
  }

  if (!filteredData.length) {
    return (
      <h4>
        <ShimmerCard />
      </h4>
    )
  }

  return (
    <div className="mt-14">
      <div className="flex justify-center">
        <div className="flex justify-around md:justify-between w-[86%] border-t-[1px] border-b-[1px] pt-6 pb-6">
          <div className="hidden md:block">
            <div className="flex gap-20">
              <p>{filteredData.length} ITEMS</p>
              <div
                className="text-[#888792] cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <div className="flex gap-1">
                    <ChevronLeftIcon className="h-5 w-5 " aria-hidden="true" />
                    <p>HIDE FILTER</p>
                  </div>
                ) : (
                  <div className="flex gap-1">
                    <ChevronRightIcon
                      className="h-5 w-5 text-[#888792]"
                      aria-hidden="true"
                    />
                    <p>SHOW FILTER</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="text-black md:hidden">Filter</p>
          <p className="md:hidden">|</p>
          <select
            className="cursor-pointer"
            value={filterOption}
            onChange={handleFilterChange}
          >
            <option value="recommended">Recommended</option>
            <option value="priceHighToLow">Price High to Low</option>
            <option value="priceLowToHigh">Price Low to High</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
      <div className="flex justify-around w-[86%] px-4 mt-12 gap-4 mx-auto">
        {open && <Sidebar />}
        <div
          className={`grid grid-cols-1 ${
            open ? "md:grid-cols-3" : "md:grid-cols-4"
          } gap-8`}
        >
          {filteredData.map((item: Item, index: number) => (
            <>
              <Card key={index} image={item.image} title={item.title} />
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
