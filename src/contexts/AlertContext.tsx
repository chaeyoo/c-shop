import {
	ComponentProps,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { createPortal } from "react-dom";

import Alert from "@/component/alert/Alert";

type AlertProps = ComponentProps<typeof Alert>;
type AlertOptions = Omit<AlertProps, "open">;

interface IAlertContextValue {
	open: (options: AlertOptions) => void;
}

export const Context = createContext<IAlertContextValue | undefined>(undefined);

const defaultValues: AlertProps = {
	open: false,
	title: null,
	description: null,
	onButtonClick: () => {},
};

export function AlertContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [alertState, setAlertState] = useState(defaultValues);
	const [element, setElement] = useState<HTMLElement | null>(null);

	const close = useCallback(() => {
		setAlertState(defaultValues);
	}, []);

	const open = useCallback(
		({ onButtonClick, ...options }: AlertOptions) => {
			setAlertState({
				...options,
				onButtonClick: () => {
					close();
					onButtonClick();
				},
				open: true,
			});
		},
		[close]
	);

	const values = useMemo(() => ({ open }), [open]);

	useEffect(() => {
		setElement(document.getElementById("root-portal"));
	}, []);

	return (
		<Context.Provider value={values}>
			{children}
			{element ? createPortal(<Alert {...alertState} />, element) : null}
		</Context.Provider>
	);
}

export function useAlertContext() {
	const values = useContext(Context);

	if (!values) {
		throw new Error("Use in AlertContext");
	}

	return values;
}
