// Package remotewrite registers the xk6-output-prometheus-remote extension
package remotewrite

package influxdb

import (
	"github.com/grafana/xk6-output-prometheus-remote/pkg/remotewrite"
	"github.com/grafana/xk6-output-influxdb/pkg/influxdb"
	"go.k6.io/k6/output"
)

func init() {
	output.RegisterExtension("xk6-prometheus-rw", func(p output.Params) (output.Output, error) {
		return remotewrite.New(p)
	})
	output.RegisterExtension("xk6-influxdb", func(p output.Params) (output.Output, error) {
		return influxdb.New(p)
	})
}