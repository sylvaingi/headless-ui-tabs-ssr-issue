import { Tab } from '@headlessui/react'

export default function Home() {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </Tab.List>

      <Tab.Panels className="TAB_CONTENTS_HERE">
        <Tab.Panel>Contents of tab 1</Tab.Panel>
        <Tab.Panel>Contents of tab 2</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}
