export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/RisksMobile/Services/service1.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/RisksMobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Risks'
                },
                'OnSuccess': '/RisksMobile/Actions/Risks/NavToRisks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/RisksMobile/Actions/Risks/NavToRisks_Edit.action');
    }
}