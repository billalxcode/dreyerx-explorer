import HeaderMenu from './menu';
import HeaderNetworkSelect from './network';

export default function Header() {
    return (
        <div className="flex justify-between items-center w-full p-4 select-none px-8">
            <p className="font-bold">DREYERX EXPLORER</p>

            <HeaderMenu />
            <HeaderNetworkSelect />
        </div>
    );
}
