import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { BaseComponentWrapper } from '@ag-grid-community/core';
let AngularFrameworkComponentWrapper = class AngularFrameworkComponentWrapper extends BaseComponentWrapper {
    setViewContainerRef(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    setComponentFactoryResolver(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    createWrapper(OriginalConstructor) {
        let that = this;
        class DynamicAgNg2Component extends BaseGuiComponent {
            init(params) {
                super.init(params);
                this._componentRef.changeDetectorRef.detectChanges();
            }
            createComponent() {
                return that.createComponent(OriginalConstructor);
            }
            hasMethod(name) {
                return wrapper.getFrameworkComponentInstance()[name] != null;
            }
            callMethod(name, args) {
                const componentRef = this.getFrameworkComponentInstance();
                return wrapper.getFrameworkComponentInstance()[name].apply(componentRef, args);
            }
            addMethod(name, callback) {
                wrapper[name] = callback;
            }
        }
        let wrapper = new DynamicAgNg2Component();
        return wrapper;
    }
    createComponent(componentType) {
        // used to cache the factory, but this a) caused issues when used with either webpack/angularcli with --prod
        // but more significantly, the underlying implementation of resolveComponentFactory uses a map too, so us
        // caching the factory here yields no performance benefits
        let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        return this.viewContainerRef.createComponent(factory);
    }
};
AngularFrameworkComponentWrapper = __decorate([
    Injectable()
], AngularFrameworkComponentWrapper);
export { AngularFrameworkComponentWrapper };
class BaseGuiComponent {
    init(params) {
        this._params = params;
        this._componentRef = this.createComponent();
        this._agAwareComponent = this._componentRef.instance;
        this._frameworkComponentInstance = this._componentRef.instance;
        this._eGui = this._componentRef.location.nativeElement;
        this._agAwareComponent.agInit(this._params);
    }
    getGui() {
        return this._eGui;
    }
    destroy() {
        if (this._componentRef) {
            this._componentRef.destroy();
        }
    }
    getFrameworkComponentInstance() {
        return this._frameworkComponentInstance;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckZyYW1ld29ya0NvbXBvbmVudFdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWctZ3JpZC1jb21tdW5pdHkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyRnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF5QyxVQUFVLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBQyxvQkFBb0IsRUFBK0MsTUFBTSx5QkFBeUIsQ0FBQztBQUkzRyxJQUFhLGdDQUFnQyxHQUE3QyxNQUFhLGdDQUFpQyxTQUFRLG9CQUF1QztJQUlsRixtQkFBbUIsQ0FBQyxnQkFBa0M7UUFDekQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzdDLENBQUM7SUFFTSwyQkFBMkIsQ0FBQyx3QkFBa0Q7UUFDakYsSUFBSSxDQUFDLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDO0lBQzdELENBQUM7SUFFRCxhQUFhLENBQUMsbUJBQW1DO1FBQzdDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixNQUFNLHFCQUFzQixTQUFRLGdCQUFnRDtZQUNoRixJQUFJLENBQUMsTUFBVztnQkFDWixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3pELENBQUM7WUFFUyxlQUFlO2dCQUNyQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNyRCxDQUFDO1lBRUQsU0FBUyxDQUFDLElBQVk7Z0JBQ2xCLE9BQU8sT0FBTyxDQUFDLDZCQUE2QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO1lBQ2pFLENBQUM7WUFFRCxVQUFVLENBQUMsSUFBWSxFQUFFLElBQWdCO2dCQUNyQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztnQkFDMUQsT0FBTyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBRWxGLENBQUM7WUFFRCxTQUFTLENBQUMsSUFBWSxFQUFFLFFBQWtCO2dCQUN0QyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFBO1lBQzVCLENBQUM7U0FDSjtRQUVELElBQUksT0FBTyxHQUEwQixJQUFJLHFCQUFxQixFQUFFLENBQUM7UUFDakUsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVNLGVBQWUsQ0FBSSxhQUEwQztRQUNoRSw0R0FBNEc7UUFDNUcseUdBQXlHO1FBQ3pHLDBEQUEwRDtRQUMxRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkYsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FDSixDQUFBO0FBbkRZLGdDQUFnQztJQUQ1QyxVQUFVLEVBQUU7R0FDQSxnQ0FBZ0MsQ0FtRDVDO1NBbkRZLGdDQUFnQztBQXFEN0MsTUFBZSxnQkFBZ0I7SUFPakIsSUFBSSxDQUFDLE1BQVM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3JELElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUV2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0sT0FBTztRQUNWLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVNLDZCQUE2QjtRQUNoQyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUM1QyxDQUFDO0NBR0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCYXNlQ29tcG9uZW50V3JhcHBlciwgRnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlciwgV3JhcGFibGVJbnRlcmZhY2V9IGZyb20gJ0BhZy1ncmlkLWNvbW11bml0eS9jb3JlJztcbmltcG9ydCB7QWdGcmFtZXdvcmtDb21wb25lbnR9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJGcmFtZXdvcmtDb21wb25lbnRXcmFwcGVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudFdyYXBwZXI8V3JhcGFibGVJbnRlcmZhY2U+IGltcGxlbWVudHMgRnJhbWV3b3JrQ29tcG9uZW50V3JhcHBlciB7XG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XG5cbiAgICBwdWJsaWMgc2V0Vmlld0NvbnRhaW5lclJlZih2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZiA9IHZpZXdDb250YWluZXJSZWY7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuICAgICAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciA9IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcbiAgICB9XG5cbiAgICBjcmVhdGVXcmFwcGVyKE9yaWdpbmFsQ29uc3RydWN0b3I6IHsgbmV3KCk6IGFueSB9KTogV3JhcGFibGVJbnRlcmZhY2Uge1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgY2xhc3MgRHluYW1pY0FnTmcyQ29tcG9uZW50IGV4dGVuZHMgQmFzZUd1aUNvbXBvbmVudDxhbnksIEFnRnJhbWV3b3JrQ29tcG9uZW50PGFueT4+IGltcGxlbWVudHMgV3JhcGFibGVJbnRlcmZhY2Uge1xuICAgICAgICAgICAgaW5pdChwYXJhbXM6IGFueSk6IHZvaWQge1xuICAgICAgICAgICAgICAgIHN1cGVyLmluaXQocGFyYW1zKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlQ29tcG9uZW50KCk6IENvbXBvbmVudFJlZjxBZ0ZyYW1ld29ya0NvbXBvbmVudDxhbnk+PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuY3JlYXRlQ29tcG9uZW50KE9yaWdpbmFsQ29uc3RydWN0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoYXNNZXRob2QobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXIuZ2V0RnJhbWV3b3JrQ29tcG9uZW50SW5zdGFuY2UoKVtuYW1lXSAhPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsTWV0aG9kKG5hbWU6IHN0cmluZywgYXJnczogSUFyZ3VtZW50cyk6IHZvaWQge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuZ2V0RnJhbWV3b3JrQ29tcG9uZW50SW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlci5nZXRGcmFtZXdvcmtDb21wb25lbnRJbnN0YW5jZSgpW25hbWVdLmFwcGx5KGNvbXBvbmVudFJlZiwgYXJncylcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZGRNZXRob2QobmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyW25hbWVdID0gY2FsbGJhY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB3cmFwcGVyOiBEeW5hbWljQWdOZzJDb21wb25lbnQgPSBuZXcgRHluYW1pY0FnTmcyQ29tcG9uZW50KCk7XG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVDb21wb25lbnQ8VD4oY29tcG9uZW50VHlwZTogeyBuZXcoLi4uYXJnczogYW55W10pOiBUOyB9KTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICAgICAgLy8gdXNlZCB0byBjYWNoZSB0aGUgZmFjdG9yeSwgYnV0IHRoaXMgYSkgY2F1c2VkIGlzc3VlcyB3aGVuIHVzZWQgd2l0aCBlaXRoZXIgd2VicGFjay9hbmd1bGFyY2xpIHdpdGggLS1wcm9kXG4gICAgICAgIC8vIGJ1dCBtb3JlIHNpZ25pZmljYW50bHksIHRoZSB1bmRlcmx5aW5nIGltcGxlbWVudGF0aW9uIG9mIHJlc29sdmVDb21wb25lbnRGYWN0b3J5IHVzZXMgYSBtYXAgdG9vLCBzbyB1c1xuICAgICAgICAvLyBjYWNoaW5nIHRoZSBmYWN0b3J5IGhlcmUgeWllbGRzIG5vIHBlcmZvcm1hbmNlIGJlbmVmaXRzXG4gICAgICAgIGxldCBmYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50VHlwZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgIH1cbn1cblxuYWJzdHJhY3QgY2xhc3MgQmFzZUd1aUNvbXBvbmVudDxQLCBUIGV4dGVuZHMgQWdGcmFtZXdvcmtDb21wb25lbnQ8UD4+IHtcbiAgICBwcm90ZWN0ZWQgX3BhcmFtczogUDtcbiAgICBwcm90ZWN0ZWQgX2VHdWk6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBfY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD47XG4gICAgcHJvdGVjdGVkIF9hZ0F3YXJlQ29tcG9uZW50OiBUO1xuICAgIHByb3RlY3RlZCBfZnJhbWV3b3JrQ29tcG9uZW50SW5zdGFuY2U6IGFueTsgIC8vIHRoZSB1c2VycyBjb21wb25lbnQgLSBmb3IgYWNjZXNzaW5nIG1ldGhvZHMgdGhleSBjcmVhdGVcblxuICAgIHByb3RlY3RlZCBpbml0KHBhcmFtczogUCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcbiAgICAgICAgdGhpcy5fYWdBd2FyZUNvbXBvbmVudCA9IHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICAgICAgdGhpcy5fZnJhbWV3b3JrQ29tcG9uZW50SW5zdGFuY2UgPSB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuX2VHdWkgPSB0aGlzLl9jb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcblxuICAgICAgICB0aGlzLl9hZ0F3YXJlQ29tcG9uZW50LmFnSW5pdCh0aGlzLl9wYXJhbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRHdWkoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZUd1aTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGcmFtZXdvcmtDb21wb25lbnRJbnN0YW5jZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnJhbWV3b3JrQ29tcG9uZW50SW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUNvbXBvbmVudCgpOiBDb21wb25lbnRSZWY8VD47XG59XG4iXX0=