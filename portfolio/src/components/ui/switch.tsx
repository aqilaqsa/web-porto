import * as React from "react";

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(({ className, onChange, checked, ...props }, ref) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        ref={ref}
        onChange={onChange} // ✅ Ensure it uses onChange
        checked={checked} // ✅ Ensure it’s controlled
        {...props}
      />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600"></div>
      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
    </label>
  );
});

Switch.displayName = "Switch";

export { Switch };
