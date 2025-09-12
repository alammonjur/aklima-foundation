param name string
param location string = resourceGroup().location
param tags object = {}

param sku string = 'Free'
param allowConfigFileUpdates bool = true
param stagingEnvironmentPolicy string = 'Enabled'
param enterpriseGradeCdnStatus string = 'Disabled'

resource staticWebApp 'Microsoft.Web/staticSites@2022-09-01' = {
  name: name
  location: location
  tags: tags
  sku: {
    name: sku
    tier: sku
  }
  properties: {
    allowConfigFileUpdates: allowConfigFileUpdates
    stagingEnvironmentPolicy: stagingEnvironmentPolicy
    enterpriseGradeCdnStatus: enterpriseGradeCdnStatus
  }
}

output name string = staticWebApp.name
output uri string = 'https://${staticWebApp.properties.defaultHostname}'
