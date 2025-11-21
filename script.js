// Simulating API call to fetch cloud resources
function fetchCloudResources() {
    // Simulated cloud resource data
    const cloudData = {
        compute: {
            instances: Math.floor(Math.random() * 10),  // Random number of compute instances
            cpuUsage: Math.floor(Math.random() * 100)   // Random CPU usage percentage
        },
        storage: {
            storageUsed: Math.floor(Math.random() * 1000),  // Random storage used in GB
            storageCapacity: 1000                          // Total storage capacity (fixed at 1000GB)
        },
        network: {
            bandwidth: Math.floor(Math.random() * 1000),   // Random bandwidth in Mbps
            latency: Math.floor(Math.random() * 50)        // Random network latency in ms
        }
    };

    // Update the DOM with simulated cloud data
    document.getElementById('compute').innerHTML = `Instances: ${cloudData.compute.instances}, CPU Usage: ${cloudData.compute.cpuUsage}%`;
    document.getElementById('storage').innerHTML = `Used: ${cloudData.storage.storageUsed}GB / ${cloudData.storage.storageCapacity}GB`;
    document.getElementById('network').innerHTML = `Bandwidth: ${cloudData.network.bandwidth}Mbps, Latency: ${cloudData.network.latency}ms`;
}

// Call fetchCloudResources on page load to simulate data fetching
window.onload = function() {
    fetchCloudResources();
};
