import React from "react";
import {
  FiClipboard,
  FiCheckCircle,
  FiPackage,
  FiTruck,
  FiHome,
  FiXCircle,
} from "react-icons/fi";

const steps = [
  {
    key: "placed",
    label: "Placed",
    icon: FiClipboard,
  },
  {
    key: "confirmed",
    label: "Confirmed",
    icon: FiCheckCircle,
  },
  {
    key: "preparing",
    label: "Preparing",
    icon: FiPackage,
  },
  {
    key: "OnTheWay",
    label: "On Way",
    icon: FiTruck,
  },
  {
    key: "delivered",
    label: "Delivered",
    icon: FiHome,
  },
];

const getStepState = (stepKey, currentStatus) => {
  const currentIndex = steps.findIndex((step) => step.key === currentStatus);

  const stepIndex = steps.findIndex((step) => step.key === stepKey);

  if (stepIndex < currentIndex) return "completed";
  if (stepIndex === currentIndex) return "active";

  return "pending";
};

const OrderStatusStepper = ({ status }) => {
  const isCancelled = status === "cancelled";

  if (isCancelled) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
          <FiXCircle size={18} />
        </div>

        <div>
          <p className="text-sm font-semibold text-red-400">Order Cancelled</p>
          <p className="text-xs text-red-300/70">
            This order has been cancelled
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex min-w-[500px] items-center justify-between">
        {steps.map((step, index) => {
          const state = getStepState(step.key, status);
          const Icon = step.icon;

          return (
            <React.Fragment key={step.key}>
              {/* Step */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div
                  className={`
                    flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200
                    ${
                      state === "completed"
                        ? "bg-green-500 border-green-500 text-white"
                        : state === "active"
                          ? "bg-[#FF4757] border-[#FF4757] text-white"
                          : "bg-[#1E1E1E] border-white/10 text-white/40"
                    }
                  `}
                >
                  <Icon size={18} />
                </div>

                <p
                  className={`
                    mt-2 text-[11px] font-medium whitespace-nowrap
                    ${
                      state === "completed"
                        ? "text-green-400"
                        : state === "active"
                          ? "text-white"
                          : "text-white/40"
                    }
                  `}
                >
                  {step.label}
                </p>
              </div>

              {/* Divider */}
              {index !== steps.length - 1 && (
                <div className="flex-1 h-[2px] mx-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`
                      h-full rounded-full transition-all duration-300
                      ${
                        getStepState(steps[index + 1].key, status) ===
                          "completed" ||
                        getStepState(steps[index + 1].key, status) === "active"
                          ? "bg-green-500 w-full"
                          : "bg-transparent w-0"
                      }
                    `}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default OrderStatusStepper;
