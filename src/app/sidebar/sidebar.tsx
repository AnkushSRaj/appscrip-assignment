"use strict"
import {useState} from "react"
import {Disclosure} from "@headlessui/react"
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/20/solid"

const filters = [
  {
    id: "IDEAL FOR",
    name: "IDEAL FOR",
    options: [
   
      {value: "Men", label: "Men", checked: false},
      {value: "Women", label: "Women", checked: false},
      {value: "Baby & Kids", label: "Baby & Kids", checked: false}
    ],
  },
  {
    id: "OCCASION",
    name: "OCCASION",
    options: [],
  },
  {
    id: "WORK",
    name: "WORK",
    options: [],
  },
  {
    id: "FABRIC",
    name: "FABRIC",
    options: [],
  },
  {
    id: "SEGMENT",
    name: "SEGMENT",
    options: [],
  },
  {
    id: "SUITABLE FOR",
    name: "SUITABLE FOR",
    options: [],
  },
  {
    id: "RAW MATERIAL",
    name: "RAW MATERIAL",
    options: [],
  },
  {
    id: "PATTERN",
    name: "PATTERN",
    options: [],
  },

]

export default function Sidebar() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [custom, setCustom] = useState(false)

  return (
      <div className="w-[32%] hidden md:block">
        <div className="flex items-center gap-3 border-b-[1px] py-4">
          <input
            checked={custom}
            type="checkbox"
            className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            onChange={e => setCustom(e.target.checked)}
          />
          <label>Customizble</label>
        </div>
        {filters.map(section => (
          <Disclosure
            as="div"
            key={section.id}
            className="border-b border-gray-200 py-6"
          >
            {({open}) => (
              <>
                <h3 className="-my-3">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900 text-[18px]">
                      {section.name}
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <p className="font-light text-[18px]">All</p>
                <Disclosure.Panel className="pt-6">
                  <div className="space-y-4">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
  )
}
