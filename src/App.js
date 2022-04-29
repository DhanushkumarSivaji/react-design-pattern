import CustomHooksPattern from './customHooksPattern'
import HocPattern from './hocPattern'
import FunctionalProgrammingReact from './functionalProgrammingReact'
import LayoutComponentsPattern from './layoutComponentsPattern'
import ContainerComponentPattern from './containerComponentPattern'
import ControlledAndUncontrolledComponentsPattern from './controlledAndUncontrolledComponentsPattern'
function App() {
  return (
    <div>
        <LayoutComponentsPattern />
        <hr/>
        <ContainerComponentPattern />
        <hr/>
        <ControlledAndUncontrolledComponentsPattern />
        <hr/>
        <HocPattern />
        <hr/>
        <CustomHooksPattern />
        <hr/>
        <FunctionalProgrammingReact/>
        <hr/>
    </div>
  );
}

export default App;
