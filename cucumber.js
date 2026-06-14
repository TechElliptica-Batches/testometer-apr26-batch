
export default{
    default: {
        require: [
            'features/step-definitions/*.js',
            'features/support/*.js'
        ],
        format: [
            'progress',
            'html:reports/cucumber-report.html'
        ]
    }
}