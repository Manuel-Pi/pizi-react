import "./styles/main.less"
import { renderApp, isSSR, registerIcons, getServerState, createAppContext, type IAppContextData, type AppContext } from "./utils/Utils"
import { Heading, type HeadingProps } from "./components/Typography/Heading/Heading"
import { ListInput } from "./components/Inputs/ListInput/ListInput"
import { MenuApp, MenuAppLayout, type MenuAppProps, type PiziRoute } from "./components/Containers/MenuApp/MenuApp"
import { Modal } from "./components/Containers/Modal/Modal"
import { NumberInput } from "./components/Inputs/NumberInput/NumberInput"
import { Switch } from "./components/Controls/Switch/Switch"
import { Table } from "./components/Data/Table/Table"
import { Tabs, Tab } from "./components/Containers/Tabs/Tabs"
import { InputValidation, TextInput } from "./components/Inputs/TextInput/TextInput"
import { Spinner } from "./components/Feedback/Spinner/Spinner"
import { Button } from "./components/Controls/Button/Button"
import { ButtonGroup } from "./components/Controls/ButtonGroup/ButtonGroup"
import { Menu } from "./components/Sites/Menu/Menu"
import { Link } from "./components/Typography/Links/Link"
import { CheckBox } from "./components/Inputs/CheckBox/CheckBox"
import { SelectInput } from "./components/Inputs/SelectInput/SelectInput"
import { List } from "./components/Typography/List/List"
import { type IAppProps, PiziApp } from "./components/Containers/App/App"
import { get, list, setRestBaseUrl } from "./utils/Rest"
import { Accordion } from "./components/Containers/Accordion/Accordion"
import { Pagination } from "./components/Controls/Pagination/Pagination"
import { Alert } from "./components/Feedback/Alert/Alert"
import { setTokenBaseUrl, Token, TokenContext, type TokenContextType } from "./utils/Token"
import { Json } from "./components/Data/Json/Json"
import { Login } from "./screens/Login/Login"

const REST = { get, list }

export {
    // Containers
    Accordion, PiziApp,
    MenuApp,
    MenuAppLayout,
    Menu, Modal,
    Tabs,
    Tab,
    // Controls
    Button,
    ButtonGroup,
    Pagination,
    Switch,
    // Data
    Table,
    Json,
    // Inputs
    CheckBox,
    ListInput,
    NumberInput,
    SelectInput,
    TextInput,
    InputValidation,
    // Typography
    Heading, Link,
    List,
    // Feedback
    Spinner,
    Alert,
    isSSR,
    registerIcons,
    renderApp,
    REST,
    setRestBaseUrl,
    Token,
    setTokenBaseUrl,
    type TokenContextType,
    TokenContext,
    getServerState,
    createAppContext,
    // Screens
    Login,
}
export type {
    IAppProps, MenuAppProps,
    PiziRoute, HeadingProps, IAppContextData,
    AppContext
}
