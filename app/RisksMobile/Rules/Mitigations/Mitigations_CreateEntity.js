export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/RisksMobile/Services/service1.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/RisksMobile/Actions/Mitigations/Mitigations_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/RisksMobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Mitigations',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/RisksMobile/Actions/Mitigations/Mitigations_CreateEntity.action');
    }
}