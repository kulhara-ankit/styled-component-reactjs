import {Heading, CustomButton} from './styledComponents'
import './App.css'

const App = () => (
  <>
    <Heading>Hello World</Heading>

    {/* using props */}
    {/* <CustomButton type="button" color="#ffffff" bgColor="#0070c1">
      Click Me
    </CustomButton>
    <CustomButton type="button" color="#0070c1" bgColor="#ffffff">
      Click Me
    </CustomButton> */}

    {/* using conditional */}

    {/* <CustomButton type="button" outline={false}>
      Click Me
    </CustomButton> */}
    <CustomButton type="button">Click Me</CustomButton>
    {/* if we not specifies it false then by default it's false */}
    <CustomButton type="button" outline={true}>
      Click Me
    </CustomButton>
  </>
)

export default App
