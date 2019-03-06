import {ReportFormatter, RequisitionModel} from 'enqueuer-plugins-template';

export class MyReportFormatter implements ReportFormatter {

    public format(report: RequisitionModel): string {
        return JSON.stringify(report, null, 2);
    }

}
