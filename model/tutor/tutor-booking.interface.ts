export interface TutorBookingRequest {
    id?:number,
    packageId:number,
    tutor_ids?:number[],
    course_id:number,
    grade_level?:GradeLevel,
    start_date?:string, // format: 2020-04-17
    duration?:string,
    group_allowed?:GroupAllowed,
    remark?:string,
    status?:TutorBookingRequestStatus,
    orderId?:string
}

export interface PaymentInfoRequest {
    orderId:string,
    packageId:number,
    course_id:number,
    courseName:string
}

export enum GradeLevel {
    six="6",
    seven="7",
    eight="8",
    nine="9",
    ten="10",
    eleven="11",
    twelve="12",
    general="general",
}

export enum GroupAllowed {
    yes="1",
    no="0",
}

export enum TutorBookingRequestStatus {
    active="active",
    inactive="inactive",
    init="init",
    pay_pending="pay_pending",
    failed="failed"
}

export interface YenePayVerifyRequest {
    courseId:number;
    BuyerId;
    MerchantOrderId;
    MerchantCode;
    MerchantId;
    TransactionCode;
    TransactionId;
    Status;
    Currency;
    Signature;
    TotalAmount;
}

export interface IPricingPackages {
    id:number;
    name:string;
    price:number;
    numOfSession:string;
    hrPerSession:string;
    access:string
}

export const PricingPackages: IPricingPackages[] = [
    {id:1, name: "Starter", price: 800, numOfSession: "#2 Sessions / Week", hrPerSession : "1 Hour / session", access: "24/7 Access to Course content" },
    {id:2, name: "Standard", price: 1200, numOfSession: "#3 Sessions / Week", hrPerSession : "1 Hour / session", access: "24/7 Access to Course content" },
    {id:3, name: "Advanced", price: 1600, numOfSession: "#4 Sessions / Week", hrPerSession : "1 Hour / session", access: "24/7 Access to Course content" }
]
