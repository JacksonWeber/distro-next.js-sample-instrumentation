import { useAzureMonitor, AzureMonitorOpenTelemetryOptions } from "@azure/monitor-opentelemetry";

const options: AzureMonitorOpenTelemetryOptions = {
    azureMonitorExporterOptions: {
      connectionString: "YOUR_INSTRUMENTATION_KEY",
    },
}
useAzureMonitor(options);